var Metalsmith = require('metalsmith')
var exists = require('fs').existsSync
var assign = require('object-assign')
var resolve = require('path').resolve

/*
 * Defaults
 */

var defaults = {
  config: 'metalsmith.json'
}

/**
 * Returns metalsmith object for `dir`
 */

function ms (dir, options) {
  options = assign({}, defaults, options || {})

  var path = resolve(dir, options.config)
  var json = loadJson(path, options.config)
  var metalsmith = loadMetalsmith(dir, json)
  loadPlugins(metalsmith, dir, json.plugins)

  return metalsmith
}

/*
 * Internal: Loads a JSON file
 */

function loadJson (path, config) {
  try {
    return require(path)
  } catch (e) {
    throw new Error('it seems like ' + config + ' is malformed.')
  }
}

/**
 * Initializes a metalsmith instance
 */

function loadMetalsmith (dir, json) {
  var metalsmith = new Metalsmith(dir)

  if (json.source) metalsmith.source(json.source)
  if (json.destination) metalsmith.destination(json.destination)
  if (json.concurrency) metalsmith.concurrency(json.concurrency)
  if (json.metadata) metalsmith.metadata(json.metadata)
  if (typeof json.clean === 'boolean') metalsmith.clean(json.clean)

  return metalsmith
}

/*
 * Loads `plugins` onto `metalsmith` instance
 */

function loadPlugins (metalsmith, dir, plugins) {
  normalize(plugins).forEach(function (plugin) {
    for (var name in plugin) {
      var opts = plugin[name]
      var mod

      try {
        var local = resolve(dir, name)
        var npm = resolve(dir, 'node_modules', name)

        if (exists(local) || exists(local + '.js')) {
          mod = require(local)
        } else if (exists(npm)) {
          mod = require(npm)
        } else {
          mod = require(name)
        }
      } catch (e) {
        throw new Error('failed to require plugin "' + name + '".')
      }

      try {
        metalsmith.use(mod(opts))
      } catch (e) {
        // prepend with plugin
        e.message = '[' + name + '] ' + e.message
        throw e
      }
    }
  })
}

/**
 * Normalize an `obj` of plugins.
 *
 * @param {Array or Object} obj
 * @return {Array}
 */

function normalize (obj) {
  if (obj instanceof Array) return obj
  var ret = []

  for (var key in obj) {
    var plugin = {}
    plugin[key] = obj[key]
    ret.push(plugin)
  }

  return ret
}

module.exports = ms
