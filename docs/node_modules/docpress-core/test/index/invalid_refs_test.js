const compile = require('../../index')()

describe('index/invalid refs:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents: '* [Readme](/README.md)\n'
      },
      'README.md': {
        contents: '[getting started](docs/getting-started.md)\n'
      }
    }

    compile(this.files, ms, (err) => {
      this.err = err
      done()
    })
  })

  it('catches invalid references', function () {
    expect(this.err).toBeDefined()
    expect(this.err.message).toEqual(
      "README.md: Unknown reference 'docs/getting-started.md'")
  })
})
