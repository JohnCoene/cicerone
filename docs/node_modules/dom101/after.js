/**
 * after : after(el, newEl)
 * Inserts a new element `newEl` just after `el`.
 *
 *     var after = require('dom101/after');
 *     var newNode = document.createElement('div');
 *     var button = document.querySelector('#submit');
 *
 *     after(button, newNode);
 */

function after (el, newEl) {
  if (typeof newEl === 'string') {
    return el.insertAdjacentHTML('afterend', newEl);
  } else {
    var next = el.nextSibling;
    if (next) {
      return el.parentNode.insertBefore(newEl, next);
    } else {
      return el.parentNode.appendChild(newEl);
    }
  }
}

module.exports = after;
