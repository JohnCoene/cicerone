var matches = require('./matches');

/**
 * closest : closest(el, selector)
 * Looks for the closest ancestor of element `el` that matches `selector`.
 * Compare with [$.fn.closest](http://api.jquery.com/closest/).
 *
 *     var closest = require('dom101/closest');
 *
 *     closest(input, 'label');
 */

function closest (el, sel) {
  if (!el) return;
  if (matches(el, sel)) {
    return el;
  } else {
    return closest(el.parentNode, sel);
  }
}

module.exports = closest;
