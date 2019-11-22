'use strict'

const ms = require('../lib/ms')
const fixture = require('./support/fixture')

describe('ms', function () {
  const fx = fixture('with-config')

  it('works', function () {
    const app = ms(fx.path())
    expect(app.metadata().custom).toEqual(true)
  })
})
