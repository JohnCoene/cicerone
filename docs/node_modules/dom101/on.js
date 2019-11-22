/**
 * on : on(el, event, fn)
 * Adds an event handler.
 *
 *     var on = require('dom101/on');
 *
 *     on(el, 'click', function () {
 *       ...
 *     });
 */

function on (el, event, handler) {
  if (el.addEventListener) {
    el.addEventListener(event, handler);
  } else {
    el.attachEvent('on' + event, function () {
      handler.call(el);
    });
  }
}

module.exports = on;
