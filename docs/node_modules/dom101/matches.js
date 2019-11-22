/**
 * matches : matches(el, selector)
 * Checks if a given element `el` matches `selector`.
 * Compare with [$.fn.is](http://api.jquery.com/is/).
 *
 *     var matches = require('dom101/matches');
 *
 *     matches(button, ':focus');
 */

function matches (el, selector) {
  var _matches = el.matches ||
    el.matchesSelector ||
    el.msMatchesSelector ||
    el.mozMatchesSelector ||
    el.webkitMatchesSelector ||
    el.oMatchesSelector;

  if (_matches) {
    return _matches.call(el, selector);
  } else if (el.parentNode) {
    // IE8 and below
    var nodes = el.parentNode.querySelectorAll(selector);
    for (var i = nodes.length; i--; 0) {
      if (nodes[i] === el) return true;
    }
    return false;
  }
}

module.exports = matches;
