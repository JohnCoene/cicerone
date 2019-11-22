'use strict'

const fixture = require('../support/fixture')

describe('fixture/custom docs:', function () {
  let app

  const fx = fixture('custom-docs')

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
    expect(fx.exists('_docpress/intro.html')).toEqual(true)
  })

  it('sets "docs" metadata', function () {
    expect(app.metadata().docs).toEqual('documents')
  })
})
