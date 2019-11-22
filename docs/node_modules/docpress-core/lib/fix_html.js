'use strict'
/* eslint-disable no-cond-assign */

const slugify = require('slugify')
const resolve = require('path').resolve
const dirname = require('path').dirname
const relative = require('path').relative

/**
 * Internal: Performs in-place HTML filters (such as fixing URLs).
 */

module.exports = function fixHtml ($, fname, sources, files, page) {
  idify($)
  fixReferences($, fname, sources, files, page)
}

/**
 * Private: Add IDs to headings.
 */

function idify ($) {
  $('h1, h2, h3, h4, h5, h6').each(function () {
    var $this = $(this)
    $this.attr('id', slugify($this.text()).toLowerCase())
  })
}

/**
 * Private: Fixes `<a href>` and `<img src>` references. Converts links to
 * Markdown files (eg, `/docs/usage.md`) into relative links to HTML files
 * (eg, `./usage.html`).
 */

function fixReferences ($, fname, sources, files, page) {
  var base = page.source
  var m

  $('[href], [src]').each(function () {
    var $this = $(this)
    if ($this.attr('href')) fix($this, 'href')
    if ($this.attr('src')) fix($this, 'src')
  })

  function fix ($this, attr) {
    var origUrl = $this.attr(attr)
    var anchor = ''

    // Ignore http://, #anchor and mailto: links.
    if (origUrl.match(/^[a-z]+:\/\//) ||
      origUrl.match(/^mailto:/) ||
      origUrl.match(/^#/)) return

    if (m = origUrl.match(/^([^#]+)(#.*)$/)) {
      origUrl = m[1]
      anchor = m[2]
    }

    // Get the target source file it points to (eg, `docs/usage.md`).
    var target = getTarget(origUrl, base)

    // Ensure that it's available.
    if (!sources[target]) {
      throw new Error(`${base}: Unknown reference '${origUrl}'`)
    }

    // Relativize that absolute URL.
    target = relative('/' + dirname(sources[base]), '/' + sources[target]) + anchor
    $this.attr(attr, target)
  }
}

/*
 * Private: Transform `target` into an absolute URL (without `/`).
 *
 *     getTarget('/foo.md')               //=> 'foo.md'
 *     getTarget('foo.md', 'docs/x.md')   //=> 'docs/foo.md'
 */

function getTarget (url, base) {
  if (url.substr(0, 1) === '/') {
    return url.substr(1)
  } else {
    return resolve('/' + dirname(base) + '/' + url).substr(1)
  }
}
