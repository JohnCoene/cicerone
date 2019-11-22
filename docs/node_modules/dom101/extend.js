/**
 * extend : extend(dest, src1, [src2 ...])
 * Extends object `dest` with properties from sources `src`.
 * Compare with [$.extend](http://api.jquery.com/jquery.extend/).
 * Also consider [object-assign] and the built-in `Object.assign`.
 *
 * [object-assign]: http://npmjs.com/object-assign
 *
 *     var extend = require('dom101/extend');
 *     extend({}, defaults, options);
 */

function extend (out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i]) continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        out[key] = arguments[i][key];
      }
    }
  }

  return out;
}

// Thanks:
// https://github.com/HubSpot/youmightnotneedjquery/blob/ef987223c20e480fcbfb5924d96c11cd928e1226/comparisons/utils/extend/ie8.js

module.exports = extend;
