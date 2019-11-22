/* global describe, it, beforeEach, afterEach */
var fixture = require('./support/fixture')
var runner = require('./support/runner')
var eventually = require('mocha-eventually')

var request = require('supertest')
var fs = require('fs')

describe('my project', function () {
  this.timeout(10000)

  runner(fixture('sample'))

  beforeEach(function () {
    this.req = request('http://localhost:' + this.run.port)
  })

  it('works', function (next) {
    request(this.run.app).get('/')
      .expect(200)
      .end(next)
  })

  describe('livereload', function () {
    beforeEach(function () {
      this.req = request('http://localhost:' + this.run.lrport)
    })

    it('has livereload', function (next) {
      this.req
        .get('/livereload.js')
        .set('Accept', 'text/html')
        .expect(200)
        .end(next)
    })
  })

  describe('livereload test', function () {
    beforeEach(function (next) {
      this.run.metalsmith.build(function (err, res) {
        if (err) throw err
        next()
      })
    })

    // just a sanity test really, let's make sure LiveReload doesn't throw
    // exceptions along the way
    it('works', function () {
      return eventually(function (next) {
        request(this.run.app).get('/')
          .expect(/./)
          .end(next)
      }.bind(this), 1000)
    })
  })

  describe('main port', function () {
    it('has livereload', function (next) {
      request(this.run.app).get('/')
        .set('Accept', 'text/html')
        .expect(/\/livereload.js/)
        .end(next)
    })

    it('returns 404', function (next) {
      request(this.run.app).get('/aoeu')
        .expect(404)
        .end(next)
    })
  })

  describe('auto rebuilding', function () {
    beforeEach(function () {
      this.oldData = fixture.file('sample/src/index.html')
    })

    afterEach(function () {
      fs.writeFileSync(fixture('sample/src/index.html'), this.oldData, 'utf-8')
    })

    it('auto rebuilds', function () {
      fs.writeFileSync(fixture('sample/src/index.html'), '<html><body>werd</body></html>', 'utf-8')
      return eventually(function (next) {
        request(this.run.app).get('/')
          .expect(/werd/)
          .end(next)
      }.bind(this), 8000)
    })
  })
})
