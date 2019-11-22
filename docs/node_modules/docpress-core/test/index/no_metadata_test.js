const compile = require('../../index')()

describe('index/no meta data:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object *without* `data`
    var ms = {
      directory () { return __dirname },
      metadata () { return {} }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [My project](../README.md)\n' +
          '* [Intro](intro.md)\n'
      },
      'README.md': {
        contents: '# My project\n'
      },
      'docs/intro.md': {
        contents: '# Introduction\n'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renders', function () {
    expect(this.files['intro.html']).toBeDefined()
  })
})
