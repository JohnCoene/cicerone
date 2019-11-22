const compile = require('../../index')()

describe('index/readme case sensitivity:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/Readme.md': {
        contents: '* [Intro](../README.md)'
      },
      'README.md': {
        contents: '# Introduction\n'
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
})
