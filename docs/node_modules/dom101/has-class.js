/**
 * hasClass : hasClass(el, className)
 * Checks if an element has a given class name.
 *
 *     var hasClass = require('dom101/has-class');
 *
 *     el.className = 'selected active';
 *     hasClass(el, 'active') //=> true
 */

function hasClass (el, className) {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
  }
}

module.exports = hasClass;
