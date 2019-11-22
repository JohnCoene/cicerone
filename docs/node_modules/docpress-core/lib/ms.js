'use strict'
/* eslint-disable no-cond-assign */

const Metalsmith = require('metalsmith')
const join = require('path').join
const log = require('./log')
const assign = Object.assign

/**
 * Returns a metalsmith object.
 */

function docpress (cwd, options) {
  const meta = {
    docs: 'docs',
    dist: '_docpress'
  }
  assign(meta, loadConfig(cwd, meta.docs))

  const app = Metalsmith(cwd)
    .source('.')
    .destination(meta.dist)
    .metadata(meta)
    .ignore('node_modules')
    .ignore(`!**/{${meta.docs}{,/**/*},*.md}`)

  if (Array.isArray(meta.ignore)) {
    meta.ignore.forEach(str => app.ignore(str))
  }

  return app
}

/**
 * Internal: loads configuration and returns it as an object.
 */

function loadConfig (cwd, docs) {
  let fn
  if (exists(fn = join(cwd, 'docpress.json'))) {
    log(`Using config: ${fn}`)
    return require(fn)
  }

  if (exists(fn = join(cwd, docs, 'docpress.json'))) {
    log(`Using config: ${fn}`)
    return require(fn)
  }

  if (exists(fn = join(cwd, 'package.json'))) {
    var pkg = require(fn)
    if (pkg && pkg.docpress) {
      log(`Using config: ${fn} (.docpress)`)
      return pkg.docpress
    }
  }
}

function exists (file) {
  try {
    require('fs').statSync(file)
    return true
  } catch (e) {}
}

module.exports = docpress
