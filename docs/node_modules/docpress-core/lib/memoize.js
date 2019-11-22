'use strict'

const LRU = require('lru-cache')
const cache = LRU(500)

/**
 * Memoizes the result of `fn()`.
 *
 * If it's been invoked recently, the last known result will be returned. This
 * is used to cache expensive calls such as Markdown parsing.
 *
 *     html = memoize('hello', () => markdown('a long string goes here'))
 */

module.exports = function memoize (keyObject, fn) {
  const key = JSON.stringify(keyObject)
  if (cache.has(key)) return cache.get(key)

  const val = fn()
  cache.set(key, val)
  return val
}
