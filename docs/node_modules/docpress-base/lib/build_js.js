'use strict'

const join = require('path').join

module.exports = function buildJs (options, done) {
  const fname = join(__dirname, '../data/script.js')
  const browserify = require('browserify')
  const b = browserify()
  b.add(fname)
  if (options && options.compress) {
    b.transform(require('uglifyify'), { global: true, sourcemap: false })
  }
  b.bundle(done)
}
