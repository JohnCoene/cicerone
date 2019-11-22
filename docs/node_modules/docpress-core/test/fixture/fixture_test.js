'use strict'

const fixture = require('../support/fixture')

describe('fixture', function () {
  let app, data

  const fx = fixture('onmount')

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
    expect(fx.exists('_docpress/_docpress.json')).toEqual(true)
    expect(fx.exists('_docpress/testing.html')).toEqual(true)
    expect(fx.exists('_docpress/cleanup.html')).toEqual(true)
  })

  it('outputs the right files for plugins', function () {
    expect(this.files['index.html']).toBeDefined()
    expect(this.files['_docpress.json']).toBeDefined()
    expect(this.files['testing.html']).toBeDefined()
    expect(this.files['cleanup.html']).toBeDefined()
  })

  it('renders htmls', function () {
    expect(fx.read('_docpress/index.html').toLowerCase())
      .toContain('</h1>')
    expect(fx.read('_docpress/testing.html').toLowerCase())
      .toContain('</h1>')
  })

  it('leaves assets alone', function () {
    expect(fx.exists('_docpress/assets/style.css')).toEqual(true)
    expect(fx.exists('_docpress/image.png')).toEqual(true)
  })

  it('deletes unused files', function () {
    expect(fx.exists('_docpress/README.md')).toEqual(false)
  })

  describe('_docpress.json', function () {
    before(function () {
      data = fx.read('_docpress/_docpress.json')
      data = JSON.parse(data)
    })

    it('has index', function () {
      expect(data.index).toBeDefined()
    })

    it('has toc', function () {
      expect(data.toc).toBeDefined()
    })

    it('has sources', function () {
      expect(data.sources).toBeDefined()
    })
  })

  describe('_docpress.json/toc', function () {
    before(function () {
      data = fx.read('_docpress/_docpress.json')
      data = JSON.parse(data).toc
    })

    it('renders proper json', function () { })

    it('has headings', function () {
      expect(data.sections[0].headings.length).toBeGreaterThan(2)
    })
  })

  describe('_docpress.json/index', function () {
    before(function () {
      data = fx.read('_docpress/_docpress.json')
      data = JSON.parse(data).index
    })

    it('renders proper json', function () { })
  })
})
