const compile = require('../../index')()

describe('index/missing pages:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents: [
          '* [Readme](/README.md)',
          '* [Getting started](/docs/getting-started.md)'
        ].join('\n') + '\n'
      },
      'README.md': {
        contents: '# hello\n'
      }
    }

    compile(this.files, ms, (err) => {
      this.err = err
      done()
    })
  })

  it('works', function () {
    expect(this.err).toBeDefined()
    expect(this.err.message).toEqual("Invalid reference 'docs/getting-started.md'")
  })
})
