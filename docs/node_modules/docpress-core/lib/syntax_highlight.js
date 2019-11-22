'use strict'

const hljs = require('highlight.js')

// Mappings of highlight.js-to-github classes.
const dict = {
  'hljs-string': 'pl-s',
  'hljs-comment': 'pl-c',
  'hljs-keyword': 'pl-k',
  'hljs-attribute': 'pl-e',
  'hljs-built_in': 'pl-c1',
  'hljs-title': 'pl-ent',
  'hljs-value': 'pl-s',
  'hljs-literal': 'pl-c1',
  'hljs-code': 'pl-c1' // markdown code
}

/**
 * Internal: highlights HTML
 */
module.exports = function syntaxHighlight (code, lang) {
  try {
    return hljs.highlight(lang, code).value
      .replace(/<span class="(hljs-[a-z0-9_]+)">/g, (_, klass) => {
        return `<span class="${dict[klass] || klass}">`
      })
  } catch (_) {
    return '' // use external default escaping
  }
}
