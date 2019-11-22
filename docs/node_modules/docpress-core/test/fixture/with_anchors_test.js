'use strict'

const fixture = require('../support/fixture')

describe('fixture/with anchors:', function () {
  let app

  const fx = fixture('with-anchors')

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
