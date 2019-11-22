'use strict'

const marked = require('marked')

const slugify = require('slugify')

module.exports = function tocifyPage (md) {
  const tokens = marked.lexer(md.toString())
  const levels = { 1: { headings: [] } }
  let ctx = levels[1].headings
  let lastDepth

  tokens.forEach((token) => {
    if (token.type === 'heading' && [2, 3].indexOf(token.depth) > -1) {
      const item = {
        title: token.text,
        depth: token.depth,
        id: slugify(token.text).toLowerCase()
      }

      if (lastDepth && token.depth !== lastDepth) {
        const parent = levels[token.depth - 1]
        if (!parent.headings) parent.headings = []
        ctx = parent.headings
      }

      ctx.push(item)
      lastDepth = token.depth
      levels[item.depth] = item
    }
  })

  if (levels[1].headings.length) {
    return levels[1].headings
  }
}
