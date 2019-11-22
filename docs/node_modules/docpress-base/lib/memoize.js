'use strict'

let cache = {}
let hits = []

function memoize (keyObject, fn) {
  const key = JSON.stringify(keyObject)
  if (cache[key]) return cache[key]
  cache[key] = fn()
  hits.push(key)
  return cache[key]
}

// Ensure that the last X keys are always available
memoize.keepKeys = 20

// Truncate every now and then
memoize.truncateInterval = 3 * 60 * 1000

// truncate the cache to the last N keys used
memoize.prune = function prune () {
  const preserved = hits.slice(hits.length - memoize.keepKeys)
  const newCache = {}

  preserved.forEach((key) => {
    newCache[key] = cache[key]
  })

  hits = preserved
  cache = newCache
}

// Truncate every few minutes.
// More hassle than its worth, really, since it prevents the Node
// process from terminating.
// memoize.timer = setInterval(memoize.prune, memoize.truncateInterval)

module.exports = memoize
