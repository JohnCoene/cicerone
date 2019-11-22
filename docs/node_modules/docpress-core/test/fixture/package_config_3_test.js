'use strict'

const fixture = require('../support/fixture')

describe('fixture/package config 3:', function () {
  let app

  const fx = fixture('package-config-3')

  before(function (done) {
    app = require(fx.path('metalsmith.js'))
    app.build((err, files) => {
      this.files = files
      if (err) return done(err)
      done()
    })
  })

  it('outputs the right files', function () {
    expect(fx.exists('_docpress/index.html')).toEqual(true)
  })
})
