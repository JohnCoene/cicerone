var wrap = require('co').wrap
var chokidar = require('chokidar')
var thunkify = require('thunkify')
var superstatic = require('superstatic')
var connect = require('connect')
var join = require('path').join

var getport = require('get-port')
var spawnLR = require('./livereloader').spawnLR
var watchLR = require('./livereloader').watchLR
var loadJson = require('./loader')
var debounce = require('debounce-collect')
var ensureFresh = require('./ensure_fresh')
var Reporter = require('./reporter')
var throat = require('throat')

function exists (file) {
  try {
    return require('fs').statSync(file)
  } catch (e) {
    return false
  }
}

/*
 * (Class) the runner.
 *
 * Pass it a `dir`, which can be a directory string, or a Metalsmith instance.
 *
 *     var app = metalsmith('.')
 *     var r = new Runner(app)
 *
 * If a directory is passed to it, it will look for `metalsmith.js` or
 * `metalsmith.json`.
 *
 * Then run it.
 *
 *     r.start((err) => { if (err) throw err })
 *
 * Available options:
 *
 * - `port` (Number)
 * - `livereload` (Boolean)
 */

function Runner (dir, options) {
  if (!options) options = {}
  if (isMetalsmith(dir)) {
    this.metalsmith = dir
    dir = this.metalsmith.directory()
  } else if (exists(join(dir, 'metalsmith.json'))) {
    this.metalsmith = loadJson(dir)
  } else if (exists('metalsmith.js')) {
    this.metalsmith = require(join(dir, 'metalsmith.js'))
  } else {
    throw new Error("Can't find metalsmith.json or metalsmith.js")
  }
  this.options = options
  this.port = (options && options.port) || process.env.PORT || 3000
  this.app = undefined
  this.watcher = undefined
  this.server = undefined
  this.tinylr = undefined
  this.lrport = undefined
  this.lrwatcher = undefined
  this.banner = (options && options.banner) || 'Metalsmith'
}

/*
 * performs an initial build the runs the server
 */

Runner.prototype.start = wrap(function * () {
  this.reporter = new Reporter()
  this.reporter.start(this.banner, this.port)

  try {
    var res = yield this.build()
    this.reporter.firstBuildOk(res)
  } catch (err) {
    this.reporter.firstBuildError(err)
  }

  if (process.env.NODE_ENV !== 'production') this.watch()
  return yield this.serve()
})

/*
 * stops everything
 */

Runner.prototype.close = function () {
  ['watcher', 'server', 'tinylr', 'lrwatcher'].forEach(function (attr) {
    if (this[attr]) {
      this[attr].close()
      this[attr] = undefined
    }
  }.bind(this))
}

Runner.prototype.useLivereload = function () {
  return this.options.livereload !== false &&
    process.env.NODE_ENV !== 'production'
}

/*
 * starts the server.
 */

Runner.prototype.serve = wrap(function * () {
  var ms = this.metalsmith
  var app = this.app = connect()

  if (this.useLivereload()) {
    yield this.enableLR()
  } else {
    this.reporter.livereloadOff()
  }

  app.use(ensureFresh)
  app.use(superstatic({
    config: ssConfig(ms),
    cwd: ms.directory(),
    debug: false
  }))

  // Listen
  var listen = thunkify(app.listen.bind(app))
  yield listen(this.port)

  // Update status
  this.reporter.running()
})

/*
 * enables Livereload
 */

Runner.prototype.enableLR = wrap(function * () {
  var ms = this.metalsmith
  var root = ms.destination()

  this.lrport = yield getport()
  this.tinylr = yield spawnLR(this.lrport)
  this.lrwatcher = watchLR(root, this.tinylr, onChange.bind(this))
  this.app.use(require('connect-livereload')({ port: this.lrport }))
  this.reporter.livereloadOn()

  function onChange (files) {
    this.reporter.buildTo(files)
  }
})

/*
 * starts watching for changes
 */

Runner.prototype.watch = function () {
  var ms = this.metalsmith

  this.reporter.watchOn()

  var build = throat(1, this.build.bind(this))

  var onWatch = wrap(function * (argsList) {
    var files = argsList.map(function (args) { return args[1] })
    var task = this.reporter.buildStart(argsList[0][0], files)

    try {
      var res = yield build()
      this.reporter.buildOk(task, res)
      return res
    } catch (err) {
      this.reporter.buildFail(task, err)
      throw err
    }
  }.bind(this))

  this.watcher = chokidar.watch(ms.directory(), {
    ignored: ignoreSpec(ms),
    ignoreInitial: true,
    cwd: ms.directory()
  })
    .on('all', debounce(onWatch.bind(this), 20))
}

/*
 * checks if a file should be ignored
 */

function ignoreSpec (ms) {
  var dir = ms.directory()
  var dest = ms.destination()

  return function (path) {
    return false ||
      matches(path, 'node_modules', dir) ||
      matches(path, 'bower_components', dir) ||
      matches(path, '.git', dir) ||
      matches(path, dest, dir)
  }
}

/*
 * checks if `path` is inside `parent` under `base`
 */

function matches (path, parent, base) {
  if (path.substr(0, 1) !== '/') {
    path = require('path').join(base, path)
  }

  if (parent.substr(0, 1) !== '/') {
    parent = require('path').join(base, parent)
  }

  return (path.substr(0, parent.length) === parent)
}

/*
 * performs a one-time build
 */

Runner.prototype.build = wrap(function * () {
  var start = new Date()
  var ms = this.metalsmith
  var build = thunkify(ms.build.bind(ms))

  try {
    yield build()
    var duration = new Date() - start
    return { duration: duration }
  } catch (err) {
    throw err
  }
})

function isMetalsmith (obj) {
  return typeof obj === 'object' &&
    typeof obj.directory === 'function'
}

function ssConfig (ms) {
  var ssConfig = hasSuperstatic(ms.directory())
  if (ssConfig) return ssConfig

  return { cwd: ms.destination() }
}

function hasSuperstatic (dir) {
  function t (fn) {
    var path = join(dir, fn)
    if (exists(path)) return path
  }

  return t('superstatic.json') || t('divshot.json') || t('firebase.json')
}

module.exports = Runner
