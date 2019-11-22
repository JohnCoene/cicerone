const compile = require('../../index')()

describe('index/fix refs:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [Readme](/README.md)\n' +
          '* [Getting started](/docs/getting-started.md)\n'
      },
      'README.md': {
        contents: '[getting started](docs/getting-started.md)'
      },
      'docs/getting-started.md': {
        contents: 'hi'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('works', function () {
    expect(this.files['index.html'].contents).toEqual(
      '<p><a href="getting-started.html">getting started</a></p>\n'
    )
  })
})
