var debounce = require('debounce')
var documentHeight = require('dom101/document-height')
var toggleClass = require('dom101/toggle-class')
var scrollTop = require('dom101/scroll-top')

/**
 * Listens for scrolling.
 * Available options:
 *
 * * `parent` (Element) — the parent to listen for scroll events to. Defaults
 *   to `document.`
 * * `className` (String) — classname to apply to the function.
 * * `onresize` (Function) — callback to run when the window resizes. Use
 *   this to cache metrics.
 * * `onscroll` (Function) — callback to run when scrolling. When this returns
 *   true, `className` will be applied; if false, it'll be removed.
 */

function Scrollclass (el, options) {
  if (!(this instanceof Scrollclass)) return new Scrollclass(el, options)
  if (!options) options = {}

  this.el = q(el)
  this.parent = q(options.parent || document)
  this.className = options.className || 'active'
  this.onresize = (options.onresize || noop).bind(this)
  this.onscroll = (options.onscroll || noop).bind(this)

  this._onscroll = debounce(this.poll.bind(this), 5)
  this._onresize = debounce(this.update.bind(this), 5)

  this.listen()
}

/**
 * Fires event listeners.
 */

Scrollclass.prototype.listen = function () {
  window.addEventListener('resize', this._onresize)
  window.addEventListener('resize', this._onscroll)
  document.addEventListener('load', this._onresize, true) // image events
  document.addEventListener('load', this._onscroll, true)
  this.parent.addEventListener('scroll', this._onscroll)
  this._onresize()
  this._onscroll()
}

/**
 * Destroys all event listeners.
 */

Scrollclass.prototype.destroy = function () {
  window.removeEventListener('resize', this._onresize)
  window.removeEventListener('resize', this._onscroll)
  document.removeEventListener('load', this._onresize, true)
  document.removeEventListener('load', this._onscroll, true)
  this.parent.removeEventListener('scroll', this._onscroll)
}

/**
 * Internal: Updates data on window resize. This sets some useful stuff that
 * can be used by the `onscroll` handler.
 */

Scrollclass.prototype.update = function () {
  this.documentHeight = documentHeight()
  this.winHeight = window.innerHeight
  this.maxScroll = this.documentHeight - this.winHeight
  this.onresize()
}

/**
 * Internal: scroll handler.
 */

Scrollclass.prototype.poll = function () {
  var result = this.onscroll(scrollTop())
  toggleClass(this.el, this.className, result)
}

function noop () {}

/**
 * Internal: helper to normalize between CSS selectors, DOM elements and
 * jQuery objects.
 */

function q (el) {
  if (typeof el === 'string') return document.querySelector(el)
  else if (typeof el === 'object' && el[0]) return el[0]
  else return el
}

module.exports = Scrollclass
