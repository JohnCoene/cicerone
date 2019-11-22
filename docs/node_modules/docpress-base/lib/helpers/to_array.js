module.exports = function toArray (list) {
  if (!list) return []
  if (Array.isArray(list)) return list
  return [list]
}

