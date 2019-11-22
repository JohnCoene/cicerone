'use strict'

const ware = require('ware')
const fs = require('fs')
const pug = require('pug')
const join = require('path').join
const url = require('url')
const assign = Object.assign

const hash = require('./lib/hash')
const buildJs = require('./lib/build_js')
const buildCss = require('./lib/build_css')

const memoize = require('./lib/memoize')
const noop = require('./lib/helpers/noop')
const toArray = require('./lib/helpers/to_array')
const eachCons = require('./lib/helpers/each_cons')
const useCache = require('./lib/helpers/use_cache')

/**
 * Metalsmith middleware
 */

module.exports = function base (options) {
  const ctx = {}

  var app = ware()
    .use(reset.bind(ctx))
    .use(sortCss.bind(ctx))
    .use(sortJs.bind(ctx))
    .use(addJs.bind(ctx))
    .use(addCss.bind(ctx))
    .use(relayout.bind(ctx))

  return function (files, ms, done) {
    app.run(files, ms, done)
  }
}

function reset (files, ms, done) {
  this.styles = []
  this.scripts = []
  this.stylusImports = []
  done()
}

/*
 * Sorts out CSS into `styles` (local/external styles) and `stylusImports`
 */

function sortCss (files, ms, done) {
  const list = toArray(ms.metadata().css)
  const add = addAsset.bind(this, this.styles, 'css', files)

  list.forEach((item) => {
    if (item.match(/\.styl$/)) {
      const path = join(ms.source(), item)
      this.stylusImports.push(path)
    } else {
      add(item)
    }
  })

  done()
}

function sortJs (files, ms, done) {
  const list = toArray(ms.metadata().js)
  const add = addAsset.bind(this, this.scripts, 'js', files)

  list.forEach((item) => add(item))
  done()
}

/**
 * Internal: delegate of sortJs and sortCss.
 * Adds a file into `this.styles` or `this.scripts`.
 */

function addAsset (list, what, files, item) {
  const sources = files['_docpress.json'].sources

  if (item.match(/^https?:\/\//)) {
    list.push(item)
  } else if (sources[item]) {
    const local = sources[item]
    list.push(local + '?t=' + hash(files[local].contents))
  } else if (files[item]) {
    list.push(item + '?t=' + hash(files[item].contents))
  } else {
    throw new Error(`${what}: can't find '${item}'`)
  }
}

/**
 * Assets
 */

function addCss (files, ms, done) {
  const callback = (err, contents) => {
    if (err) return done(err)
    files['assets/style.css'] = {contents}
    this.styles.unshift('assets/style.css?t=' + hash(contents))
    done()
  }

  const cacheable = (this.stylusImports.length === 0)

  ;(cacheable && useCache('cache/style.css', callback)) ||
  buildCss({ imports: this.stylusImports }, callback)
}

/**
 * Add JavaScript
 */

function addJs (files, ms, done) {
  const callback = (err, contents) => {
    if (err) return done(err)
    files['assets/script.js'] = {contents}
    this.scripts.push('assets/script.js?t=' +
      hash(files['assets/script.js'].contents))

    // Add user's files
    let scripts = ms.metadata().scripts

    if (Array.isArray(scripts)) {
      let userScripts = scripts.map((location) => {
        // Need to check if local or external
        let fileUrl = url.parse(location, false, true)
        if (fileUrl.host === null) {
          // Local url
          let file = files[location]
          if (!file.contents) return
          let fileHash = hash(file.contents)
          return `${location}?t=${fileHash}`
        } else {
          // External url
          return `${location}`
        }
      }).filter((url) => !!url)
      this.scripts = this.scripts.concat(userScripts)
    }

    done()
  }

  useCache('cache/script.js', callback) ||
  buildJs({}, callback)
}

/**
 * Layout pug.
 * Passes these template options:
 *
 * * `base` — prefix.
 * * `toc` — the table of contents, as per toc.json.
 * * `index` — the index, as per index.json.
 * * `meta` — metalsmith metadata.
 * * `prev.title` — previous page title.
 * * `prev.url` — previous page url.
 * * `next.title` — next page title.
 * * `next.url` — next page url.
 * * `active` — the filename of the active file (eg, `foo/index.html`)
 * * `styles` — array of CSS files
 * * `scripts` — array of JavaScript files
 *
 * `meta` typically has:
 *
 * * `github` (Optional)
 * * `docs`
 */

function injectDisqus (disqus) {
  if (!disqus) return noop
  var exclude = new RegExp(disqus.exclude || 'index')

  function addDisqus (fname, meta) {
    if (exclude.test(fname)) return null
    return disqus.shortname
  }

  return addDisqus
}

function relayout (files, ms, done) {
  const toc = files['_docpress.json'].toc
  const index = files['_docpress.json'].index
  const meta = ms.metadata()

  const addDisqus = injectDisqus(meta.disqus)
  const pugData = fs.readFileSync(join(__dirname, 'data/layout.pug'), 'utf-8')
  const layout = memoize(['pug', pugData], () => {
    return pug.compile(pugData, { pretty: true })
  })

  eachCons(index, (_, fname, __, prevName, ___, nextName) => {
    if (!fname.match(/\.html$/)) return
    const file = files[fname]
    const base = Array(fname.split('/').length).join('../')
    const styles = this.styles.map(relativize(base))
    const scripts = this.scripts.map(relativize(base))

    const locals = {
      base,
      toc,
      index,
      meta,
      styles,
      scripts,
      prev: prevName && assign({}, index[prevName], { url: base + prevName }),
      next: nextName && assign({}, index[nextName], { url: base + nextName }),
      active: fname
    }

    meta.disqus = addDisqus(fname, meta)
    meta.lang = meta.lang || 'en';
    const key = [ pugData, locals, file ]

    file.contents = memoize(['pugdata', key], () => {
      return layout(assign({}, file, locals))
    })
  })

  done()
}

function relativize (base) {
  return function (url) {
    if (url.substr(0, 1) === '/' || url.match(/^https?:\/\//)) {
      return url
    }

    return base + url
  }
}
