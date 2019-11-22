const compile = require('../../index')()

describe('index/markdown options:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () {
        return { docs: 'docs', markdown: { typographer: 'true' } }
      }
    }

    this.files = {
      'docs/Readme.md': {
        contents: '* [Project](../README.md)'
      },
      'README.md': {
        contents: '"Hello"\n'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renders', function () {
    expect(this.files['index.html']).toBeDefined()
  })

  it('has typographic quotes', function () {
    expect(this.files['index.html'].contents)
      .toContain('&#x201C;Hello&#x201D;')
  })
})
