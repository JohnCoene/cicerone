/**
 * toggleClass : toggleClass(el, className, [value])
 * Adds or removes a class name to an element. If `value` is provided,
 * this will add the class if it's `true` or remove if it's `false`.
 * Compare with `$.fn.toggleClass`.
 *
 *     var toggleClass = require('dom101/toggle-class');
 *
 *     // toggles on or off:
 *     toggleClass(el, 'active');
 *
 *     // with a value:
 *     var isSelected = true;
 *     toggleClass(el, 'selected', isSelected);
 */

var addClass = require('./add-class');
var removeClass = require('./remove-class');
var hasClass = require('./has-class');

function toggleClass (el, className, value) {
  if (typeof value === 'undefined') {
    value = !hasClass(el, className);
  }

  return value
    ? addClass(el, className)
    : removeClass(el, className);
}

module.exports = toggleClass;
