var fixture = require('../support/fixture')
var runner = require('../support/runner')
var ms = require('../support/ms')

var request = require('supertest')

describe('fixture: with plugin', function () {
  this.timeout(ms(2000))

  runner(fixture('with_plugin'))

  it('works', function (next) {
    request(this.run.app).get('/')
      .expect(200)
      .end(next)
  })
})
