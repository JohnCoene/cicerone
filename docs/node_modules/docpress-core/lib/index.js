'use strict'

const ware = require('ware')
const each = require('lodash/forEach')
const cheerio = require('cheerio')

const tocify = require('./tocify')
const indexify = require('./indexify')
const fixHtml = require('./fix_html')
const stripMarkdown = require('./helpers/strip_markdown')
const md = require('./helpers/markdown')
const memoize = require('./memoize')
const externalSource = require('./external_source')

const assign = Object.assign

/**
 * Metalsmith Middleware that takes a source tree and generates a site from it.
 * It turns markdown into HTML files, but these files are bare and don't have
 * anything other than rendered markup.
 *
 * It also builds _docpress.json which has reusable
 * metadata for subsequent tools (like `docpress-base`).
 *
 * ### _docpress.json
 * `_docpress.json` is a JSON file with the following metadata:
 *
 * - `index` (Object) — pages index.
 * - `toc` (Object) — table of contents (as a tree).
 * — `sources` (Object) — a mapping of source to destination filenames.
 *
 * These datas can be obtained via `files['_docpress.json'].index` (ie, as
 * Metalsmith file metadata) or by parsing _docpress.json.
 *
 *     files['_docpress.json'].index
 *     files['_docpress.json'].sources
 *     files['_docpress.json'].toc
 *
 * ### Index
 * Each `index` item has:
 *
 * - `source` — path to source
 * - `title` — the page title according to TOC
 * - `slug` — slug for the page
 * - `headings` — an array of headings
 *
 *     index = files['_docpress.json'].index
 *     index['index.html']
 *     => {
 *       source: 'README.md',
 *       title: 'My project',
 *       slug: 'index',
 *       headings: [
 *         { title: 'Overview', depth: 2, id: 'overview' },
 *         { title: 'Usage', depth: 2, id: 'usage', headings: [
 *           { title: 'via npm', depth: 3, id: 'via-npm' },
 *         ]},
 *       ]
 *     }
 *
 * ### Sources
 * `sources` is a key-value pairing of source files to built files.
 *
 *     files['_docpress.json'].sources
 *     => {
 *       "README.md": "index.html",
 *       "docs/usage.md": "usage.html",
 *       "docs/install/windows.md": "install/windows.html"
 *     }
 *
 * ### Table of contents
 * Each `toc` item has:
 *
 * - `sections` — array of sections
 * - `source` — path to source
 * - `title` — title
 * - `slug` — slug for the item
 * - `url` — URL, if applicable
 * - `headings` — array of `{ title, depth, id }`
 * - `anchor` — anchor to the TOC link, if any
 *
 *     toc = files['_docpress.json'].toc
 *     toc = {
 *       sections: [
 *         {
 *           title: 'My project',
 *           source: 'README.md',
 *           url: 'index.html',
 *           slug: 'index',
 *           headings: [ ... ]
 *         }, ...
 *       ]
 *     }
 *
 * ### Each file
 * Each HTML file will have these metadata available:
 *
 *     file = files['index.html']
 *     file.title       //=> "My project"
 *     file.slug        //=> "index" (perfect for HTML IDs)
 *     file.source      //=> "README.md" (where it was rendered from)
 *     file.filename    //=> "index.html" (new filename)
 *     file.$           // Cheerio instance
 *     file.markdown    // Markdown source
 *     file.html        // Rendered HTML
 *     file.contents    // Same as `.html`
 */

module.exports = function core (options) {
  const ctx = {
    cache: {}
  }

  const app = ware()
    .use(buildIndex.bind(ctx))
    .use(renderMarkdown.bind(ctx))
    .use(cleanFiles.bind(ctx))

  return function (files, ms, done) {
    app.run(files, ms, done)
  }
}

/**
 * Private: builds `_docpress.json`. See `core()` for a description on what it
 * is. It will also modify files with the `.filename` attribute.
 */

function buildIndex (files, ms, done) {
  const m = memoize
  const docs = ms.metadata().docs || 'docs'
  const docsExpr = new RegExp('^' + docs + '/')
  let readmeData

  // Read the TOC (docs/readme.md)
  try {
    readmeData = getTocContents(files, docs, m)
  } catch (err) {
    return done(err)
  }

  const cacheKey = [ms.directory(), docs, readmeData, Object.keys(files)]

  // Build `toc`
  const toc = m(['tocify', cacheKey], () => {
    return tocify(readmeData, files, {
      docs
    })
  })

  // Build `index` and `sources`
  const indexes = m(['indexes', cacheKey], () => {
    return indexify(toc, {
      docs
    })
  })

  // Generate source mappings for things outside the TOC.
  // Also set `filename` attributes.
  Object.keys(files).forEach((fname) => {
    const file = files[fname]
    if (indexes.sources[fname]) {
      file.filename = indexes.sources[fname]
    } else {
      // 'docs/x/y' => 'x/y'
      const filename = fname.replace(docsExpr, '')
      // make sure non-md files inside docs/ are preserved (images)
      if (filename !== fname && !fname.match(/\.md$/)) {
        file.filename = filename
        indexes.sources[fname] = filename
      }
    }
  })

  // Ensure every link in the TOC works (don't re-do it if nothing changed)
  m(['verifyIndex', cacheKey], () => {
    verifyIndex(indexes.index, files)
  })

  const data = {
    toc: toc,
    index: indexes.index,
    sources: indexes.sources
  }

  // Save
  files['_docpress.json'] = assign({}, data, {
    filename: '_docpress.json',
    contents: JSON.stringify(data, null, 2) + '\n'
  })

  done()
}

/**
 * Private: returns the contents of the TOC (docs/readme.md).
 */

function getTocContents (files, docs, m) {
  const readme = findMatch(files, new RegExp(`^${docs}/README.md$`, 'i'))
  if (readme) {
    return files[readme].contents.toString()
  } else {
    const mainReadme = findMatch(files, /^README.md$/i)
    if (!mainReadme) {
      throw new Error(
        `Table of contents not found ('${docs}/README.md') and no README.md found`)
    }
    const contents = files[mainReadme].contents.toString()
    const title = m(['inferTitle', contents], () => inferTitle(contents))
    return `* **[${title}](/${mainReadme})**`
  }
}

/**
 * Private: Converts .md to .html.
 * At the end of this, you get a site with `.html` files (bare, no layout).
 */

function renderMarkdown (files, ms, done) {
  var pages = files['_docpress.json'].index
  var sources = files['_docpress.json'].sources
  var m = memoize

  // render each page
  each(pages, (page, fname) => {
    const file = externalSource(page.source) ? { contents: '' } : files[page.source]

    const contents = file.contents.toString()
    const mdOptions = ms.metadata().markdown

    const cacheKey = [ms.directory(), contents, mdOptions, fname, sources]

    const html = m(['markdown', cacheKey], () => {
      return md(mdOptions, ms.directory()).render(contents)
    })

    // Warning: if you modify this, the cache needs to be invalidated.
    // There's no way to invalidate it at the moment, so any modications
    // to this need to be idempotent
    const $ = m(['cheerio', cacheKey], () => {
      const $ = cheerio.load(html)
      fixHtml($, fname, sources, files, page)
      return $
    })

    file.$ = $
    file.markdown = file.contents
    file.html = $.html()
    file.title = page.title
    file.source = page.source
    file.slug = page.slug
    file.contents = file.html
  })

  done()
}

/**
 * Private: Cleans unused md's.
 */

function cleanFiles (files, ms, done) {
  // rename any old files
  each(files, (file, fname) => {
    // cleans whatever's not processed (ie, has no `filename`)
    // `filename` is left by an earlier step.
    var old = files[fname]
    delete files[fname]

    // put it back if it's meant to be there.
    // renames docs/images/pic.png => images/pic.png
    if (file.filename) files[file.filename] = old
  })

  done()
}

/**
 * Private: validate that pages in `index` are present in `files`. Throw an
 * error if something's missing.
 */

function verifyIndex (index, files) {
  each(index, (file, url) => {
    if (!files[file.source] && !externalSource(url)) {
      throw new Error(`Invalid reference '${file.source}'`)
    }
  })
}

/**
 * Private: finds the file in `file` that matches a given regexp `expr`.
 *
 *     findMatch(files, /\/README.md$/i)
 */

function findMatch (files, expr) {
  const filenames = Object.keys(files)
  return filenames.find((f) => f.match(expr))
}

/**
 * Private: infer the page title from the first heading of contents
 */

function inferTitle (contents) {
  const marked = require('marked')
  var tokens = marked.lexer(contents.toString())

  for (const i in tokens) {
    const token = tokens[i]
    if (token.type === 'heading') return stripMarkdown(token.text)
  }
}
