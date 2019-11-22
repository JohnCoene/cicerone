'use strict'

const syntaxHighlight = require('../syntax_highlight')
const markdownIt = require('markdown-it')
const assign = Object.assign

var mdCache = {}

/**
 * Private: Returns a `markdown-it` instance with plugins loaded.
 *
 *     md({ typographer: true })
 *     md({ plugins: { decorate: {} } })
 */

module.exports = function md (options, cwd) {
  const plugins = (options && options.plugins) || {}
  const key = JSON.stringify(options)
  if (mdCache[key]) return mdCache[key]

  let newOptions = {
    langPrefix: 'lang-',
    highlight: syntaxHighlight,
    linkify: true,
    html: true
  }

  newOptions = assign({}, newOptions, options || {}, { plugins: undefined })

  var md = markdownIt(newOptions)
  if (plugins) loadPlugins(md, plugins, cwd)

  mdCache[key] = md
  return md
}

function loadPlugins (md, plugins, cwd) {
  Object.keys(plugins).forEach((plugin) => {
    const options = plugins[plugin]
    const pluginPath =
      tryRequire(`markdown-it-${plugin}`) ||
      (cwd && tryRequire(`${cwd}/node_modules/markdown-it-${plugin}`))
    if (!pluginPath) throw new Error(`Can't find module 'markdown-it-${plugin}'`)
    md = md.use(require(pluginPath), options)
  })
}

function tryRequire (name) {
  try { return require.resolve(name) } catch (e) {}
}
