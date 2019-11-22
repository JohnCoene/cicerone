/**
 * remove : remove(el)
 * Removes an element from the DOM.
 *
 *     var remove = require('dom101/remove');
 *
 *     remove(el);
 */

function remove (el) {
  el && el.parentNode && el.parentNode.removeChild(el);
}

module.exports = remove;
