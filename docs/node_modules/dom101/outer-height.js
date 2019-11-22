/**
 * outerHeight : outerHeight(el, includeMargin)
 * Returns the outer height (height + padding [+margin]) of an element as an
 * integer. Supports IE8+.
 *
 *     var outerHeight = require('dom101/outer-height');
 *     var height = outerHeight(el);
 */

function outerHeight (el, includeMargin) {
  var style = typeof window.getComputedStyle !== 'undefined'
    ? window.getComputedStyle(el)
    : el.currentStyle;

  return el.offsetHeight + (includeMargin && (parseInt(style['marginTop'], 10) + parseInt(style['marginBottom'], 10)) || 0);
}

module.exports = outerHeight;
