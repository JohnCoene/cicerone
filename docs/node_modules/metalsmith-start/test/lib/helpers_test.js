/* global describe, it, expect */

var fixture = require('../support/fixture')
var Helpers = require('../../lib/helpers')

describe('helpers: isAsset()', function () {
  var isAsset = Helpers.isAsset

  it('works', function () {
    expect(isAsset('foo.html')).toEqual(true)
    expect(isAsset('foo.css')).toEqual(true)
    expect(isAsset('foo.jpg')).toEqual(true)
  })

  it('rejects non-assets', function () {
    expect(isAsset('foo.map')).toEqual(false)
    expect(isAsset('foo')).toEqual(false)
  })
})

describe('helpers: diffHashes()', function () {
  var diffHashes = Helpers.diffHashes

  it('works', function () {
    var result = diffHashes({
      'index.js': 'aaa',
      'style.css': 'bbb'
    }, {
      'index.js': 'ccc',
      'style.css': 'bbb'
    })

    expect(result).toEqual([ 'index.js' ])
  })
})

describe('helpers: safe()', function () {
  var safe = Helpers.safe

  it('works', function () {
    var stat = safe(require('mz/fs').stat)
    return stat('non-existent-file.txt')
  })
})

describe('helpers: filterFiles()', function () {
  var filterFiles = Helpers.filterFiles

  it('works', function () {
    return filterFiles(fixture('files/'), ['file1.txt', 'notafile.txt'])
      .then(function (result) {
        expect(result).toEqual(['file1.txt'])
      })
  })
})
