var fixture = require('../support/fixture')
var runner = require('../support/runner')
var ms = require('../support/ms')

var request = require('supertest')

describe('fixture: with_superstatic:', function () {
  this.timeout(ms(2000))

  runner(fixture('with_superstatic'))

  it('honors cleanUrls', function (next) {
    request(this.run.app).get('/about')
      .expect(200)
      .end(next)
  })
})
