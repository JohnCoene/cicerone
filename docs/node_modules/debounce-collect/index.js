/* global define */
void (function (root, factory) {
  if (typeof define === 'function' && define.amd) define(factory)
  else if (typeof exports === 'object') module.exports = factory()
  else root.debounceCollect = factory()
}(this, function () {
  var now = Date.now || function now () { return new Date().getTime() }

  function debounce (func, wait, immediate) {
    var timer, context, timestamp, result
    var args = []
    if (wait == null) wait = 100

    function onTimeout () {
      var elapsed = now() - timestamp

      if (elapsed < wait && elapsed > 0) {
        timer = setTimeout(onTimeout, wait - elapsed)
      } else {
        timer = null
        if (!immediate) {
          result = call()
          if (!timer) reset()
        }
      }
    }

    function call () {
      return func.call(context, args)
    }

    function reset () {
      context = null
      args = []
    }

    return function debounced () {
      context = this
      args.push([].slice.call(arguments))
      timestamp = now()
      var callNow = immediate && !timer
      if (!timer) timer = setTimeout(onTimeout, wait)
      if (callNow) {
        result = call()
        reset()
      }

      return result
    }
  }

  return debounce
})); // eslint-disable-line semi
