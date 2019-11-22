var toggleClass = require('dom101/toggle-class')
var scrollTop = require('dom101/scroll-top')
var documentHeight = require('dom101/document-height')
var debounce = require('debounce')
var each = require('dom101/each')

/**
 * Tracks scrolling. Options:
 *
 * - `selectors` (String)
 * - `parent` (String) - where headings are. defaults to `document`
 * - `menu` (String | Element) - where links are.
 * - `scrollParent` (String | Element) - where to listen for scroll events.
 * - `onupdate` (Function) - callback to invoke when links change.
 */

function Scrolltrack (options) {
  if (!(this instanceof Scrolltrack)) return new Scrolltrack(options)
  if (!options) options = {}

  this.selector = options.selector || 'h1, h2, h3, h4, h5, h6'
  this.parent = options.parent || document
  this.onupdate = options.onupdate || function () {}
  this.menu = options.menu || document
  this.scrollParent = options.scrollParent || document
  this.offsetPercent = options.offsetPercent || 0.1

  this.listener = debounce(this.onScroll, 5).bind(this)
  this.update = debounce(this._update, 20).bind(this)
  this.active = undefined
  this.index = []

  this.listen()
  this.update()
}

/**
 * Internal: Attaches event listeners.
 * No need to call this; the constructor already does this.
 */

Scrolltrack.prototype.listen = function () {
  q(this.scrollParent).addEventListener('scroll', this.listener)
  document.addEventListener('load', this.update, true) // image events
  document.addEventListener('load', this.listener, true)
  window.addEventListener('resize', this.update)
  window.addEventListener('resize', this.listener)
}

/**
 * Stops listening for events.
 */

Scrolltrack.prototype.destroy = function () {
  q(this.scrollParent).removeEventListener('scroll', this.listener)
  document.removeEventListener('load', this.update, true)
  document.removeEventListener('load', this.listener, true)
  window.removeEventListener('resize', this.update)
  window.removeEventListener('resize', this.listener)
}

/**
 * Internal: Updates the index of the headings and links.
 * Used by `update()`.
 */

Scrolltrack.prototype.reindex = function () {
  var headings = this.parent.querySelectorAll(this.selector)
  var index = this.index = []
  var ids = {}

  var menu = q(this.menu)

  each(headings, function (heading) {
    var rect = heading.getBoundingClientRect()
    var id = heading.getAttribute('id')

    if (!ids[id]) ids[id] = 0
    else ids[id]++

    var links = menu.querySelectorAll('[href=' + JSON.stringify('#' + id) + ']')

    index.push({
      el: heading,
      id: id,
      link: links[ids[id]],
      top: rect.top + scrollTop()
    })
  })

  this.metrics = {
    windowHeight: window.innerHeight,
    documentHeight: documentHeight()
  }
}

/**
 * update : update()
 * Updates indices. Call this when the DOM changes.
 */

Scrolltrack.prototype._update = function () {
  this.reindex()
  this.onScroll()
}

/**
 * Internal: check for updates when scrolling. This is attached to the
 * document's scroll event.
 */

Scrolltrack.prototype.onScroll = function () {
  var y = this.scrollTop()
  var active

  each(this.index, function (heading) {
    if (heading.top < y) active = heading
  })

  if (active !== this.active) {
    var last = this.active
    this.active = active
    this.follow(active, last)
    this.onupdate(active, last)
  }
}

/**
 * Returns the scroll position. This also takes care of scaling it to go all
 * the way to the bottom.
 */

Scrolltrack.prototype.scrollTop = function () {
  var y = scrollTop()
  var offset = 0
  var k = this.offsetPercent

  if (this.metrics) {
    var screen = this.metrics.windowHeight
    var maxY = this.metrics.documentHeight - screen
    var fold = maxY - screen * 1.2

    if (y > fold) {
      var lastPercent = (y - fold) / screen
      offset = screen * (k + (1 - k) * lastPercent)
    } else {
      offset = screen * k
    }
  }

  return y + offset
}

/**
 * Updates the selected link.
 */

Scrolltrack.prototype.follow = function (heading, last) {
  if (this.lastlink) {
    toggleClass(this.lastlink, '-active', false)
    this.lastlink = null
  }

  if (heading && heading.link) {
    toggleClass(heading.link, '-active', true)
    this.lastlink = heading.link
  }
}

/**
 * Internal: helper to normalize between CSS selectors, DOM elements and
 * jQuery objects.
 */

function q (el) {
  if (typeof el === 'string') return document.querySelector(el)
  else if (typeof el === 'object' && el[0]) return el[0]
  else return el
}

module.exports = Scrolltrack
