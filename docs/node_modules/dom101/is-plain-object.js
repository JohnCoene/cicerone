/**
 * isPlainObject : isPlainObject(obj)
 * Checks if `obj` is an object created with `{}` or `new Object`.
 * Compare with [$.isPlainObject](http://api.jquery.com/jquery.isplainobject/).
 *
 *     var isPlainObject = require('dom101/is-plain-object');
 *
 *     isPlainObject({}) //=> true
 *     isPlainObject([]) //=> false
 */

function isPlainObject (obj) {
  var hasOwn = ({}).hasOwnProperty;

  return obj &&
    // is object
    ({}).toString.call(obj) === '[object Object]' &&

    // not dom node
    !obj.nodeType &&

    // not own constructor
    obj.constructor &&
    !hasOwn.call(obj, 'constructor') &&

    // not window
    obj !== obj.window &&

    // not own constructor prototype must be object
    obj.constructor.prototype &&
    hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
}

module.exports = isPlainObject;
