/**
 * prepend : prepend(el, child)
 * Prepends a `child` into a parent `el`. Compare with `$.fn.prepend`.
 *
 *     var prepend = require('dom101/prepend');
 *
 *     prepend(el, child);
 */

function prepend (el, child) {
  if (el.firstChild) {
    el.insertBefore(child, el.firstChild);
  } else {
    el.appendChild(child);
  }
}

module.exports = prepend;
