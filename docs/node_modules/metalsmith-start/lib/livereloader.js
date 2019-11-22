var Tinylr = require('tiny-lr')
var chokidar = require('chokidar')
var co = require('co')

var debounce = require('debounce-collect')
var hashFiles = require('./hashfile').hashFiles
var isAsset = require('./helpers').isAsset
var diffHashes = require('./helpers').diffHashes
var filterFiles = require('./helpers').filterFiles

/*
 * injects livereload into connect() server, and starts a livereload server at
 * a random port
 */

exports.spawnLR = co.wrap(function * (port) {
  var lrServer = new Tinylr()
  lrServer.listen(port)
  return lrServer
})

/*
 * returns a watcher to update tinyLR
 */

exports.watchLR = function (root, lrServer, onChange) {
  var hashes = {}

  var update = co.wrap(function * (argsList) {
    // Get a list of paths that have been 'change'd or 'create'd.
    // If it's been deleted, mark it off.
    var paths = argsList.reduce(function (list, args) {
      var fname = args[1]
      if (!isAsset(fname)) return list

      if (args[0] === 'delete') {
        delete hashes[fname]
      } else {
        list.push(fname)
      }
      return list
    }, [])

    // Get rid of any non-files (directories)
    paths = yield filterFiles(root, paths)
    if (paths.length === 0) return

    // Get their hashes
    var newHashes = yield hashFiles(root, paths)

    // Compare with old
    var files = diffHashes(hashes, newHashes)
    if (files.length === 0) return

    // Call the callback
    if (onChange) onChange(files)

    files = files.map(escape)
    lrServer.changed({
      body: { files: files }
    })
  })

  var uupdate = function (argsList) {
    update(argsList).catch(function (err) { throw err })
  }

  return chokidar.watch(root, {
    ignoreInitial: true,
    cwd: root
  })
    .on('all', debounce(uupdate, 50))
}
