'use strict'

const fixture = require('../support/fixture')

describe('fixture/root config:', function () {
  let app

  const fx = fixture('root-config')

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

  it('reads config from root docpress.json', function () {
    expect(app.metadata().custom).toBeDefined()
  })
})
