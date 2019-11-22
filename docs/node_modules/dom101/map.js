/**
 * map : map(list, fn)
 * Iterates through `list` (an array or an object).
 *
 *     var map = require('dom101/map');
 *     var text = require('dom101/text');
 *
 *     map(qa('.button'), function (el) {
 *       return text(el);
 *     });
 */

function map (list, fn) {
  var i;
  var len = list.length;
  var result = [];
  var idx;

  if (typeof len === 'number') {
    for (i = 0; i < len; i++) {
      result.push(fn(list[i], i));
    }
  } else {
    idx = 0;
    for (i in list) {
      if (list.hasOwnProperty(i)) {
        result.push(fn(list[i], i, idx++));
      }
    }
  }

  return result;
}

module.exports = map;
