/**
 * before : before(el, newEl)
 * Inserts a new element `newEl` just before `el`.
 *
 *     var before = require('dom101/before');
 *     var newNode = document.createElement('div');
 *     var button = document.querySelector('#submit');
 *
 *     before(button, newNode);
 */

function before (el, newEl) {
  if (typeof newEl === 'string') {
    return el.insertAdjacentHTML('beforebegin', newEl);
  } else {
    return el.parentNode.insertBefore(newEl, el);
  }
}

module.exports = before;
