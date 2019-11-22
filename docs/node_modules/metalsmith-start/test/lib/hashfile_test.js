var fixture = require('../support/fixture')

describe('hashfile', function () {
  var hashFile = require('../../lib/hashfile').hashFile
  var hashFiles = require('../../lib/hashfile').hashFiles

  describe('hashFile()', function () {
    it('works', function () {
      return hashFile(fixture('files/file1.txt'))
        .then(function (res) {
          expect(res).toEqual('ce57c01c8bda67ce22ded81b28657213a99e69b3')
        })
    })

    it('works again', function () {
      return hashFile(fixture('files/file2.txt'))
        .then(function (res) {
          expect(res).toEqual('d06a59c73d2363d6c0692de0e3d7629a9480f901')
        })
    })

    it('can handle not founds', function () {
      return hashFile('ayylmao')
        .then(function (res) {
          expect(res).toEqual(null)
        })
    })

    it('can handle directories', function () {
      return hashFile(fixture('files/'))
        .then(function (res) {
          expect(res).toEqual(null)
        })
    })
  })

  describe('hashFiles()', function () {
    beforeEach(function () {
      var files = [
        'file1.txt',
        'file2.txt'
      ]

      return hashFiles(fixture('files'), files)
        .then(function (res) {
          this.result = res
        }.bind(this))
    })

    it('turns it into an object', function () {
      expect(this.result).toEqual(expect.any(Object))
    })

    it('has files for keys', function () {
      expect(Object.keys(this.result)).toContain('file1.txt')
      expect(Object.keys(this.result)).toContain('file2.txt')
    })

    it('returns stuff', function () {
      expect(this.result['file1.txt']).toEqual(
        'ce57c01c8bda67ce22ded81b28657213a99e69b3')
    })
  })
})
