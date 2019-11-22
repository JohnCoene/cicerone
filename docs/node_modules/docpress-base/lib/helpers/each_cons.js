/*
 * Iterates through an array/object `list`, but tells you the previous/next
 * items as well.
 */

module.exports = function eachCons (list, fn) {
  var keys = Object.keys(list)
  keys.forEach((key, idx) => {
    const prevKey = keys[idx - 1]
    const nextKey = keys[idx + 1]
    fn(list[key], key,
       prevKey && list[prevKey], prevKey,
       nextKey && list[nextKey], nextKey)
  })
}
