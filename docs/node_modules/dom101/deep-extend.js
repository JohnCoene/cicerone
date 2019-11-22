var isPlainObject = require('./is-plain-object');

/**
 * deepExtend : deepExtend(dest, src1, [src2 ...])
 * Extends object `dest` with properties from sources `src`.
 * Compare with [$.extend(true)](http://api.jquery.com/jquery.extend/).
 * Also consider [deep-extend].
 *
 * [deep-extend]: http://npmjs.com/deep-extend
 *
 *     var deepExtend = require('dom101/deep-extend');
 *     deepExtend({}, defaults, options);
 */

function deepExtend (out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj) continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (isPlainObject(obj[key])) {
          out[key] = deepExtend(out[key], obj[key]);
        } else {
          out[key] = obj[key];
        }
      }
    }
  }

  return out;
}

// Thanks:
// https://github.com/HubSpot/youmightnotneedjquery/blob/ef987223c20e480fcbfb5924d96c11cd928e1226/comparisons/utils/deep_extend/ie8.js

module.exports = deepExtend;

