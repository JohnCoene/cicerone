const compile = require('../../index')()

describe('index/docpress.json:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    this.ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'README.md': { contents: '# hello\n' },
      'docs/README.md': { contents: '* [README](../README.md)' },
      'docpress.json': { contents: '{}' }
    }

    compile(this.files, this.ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('removes docpress.json', function () {
    expect(this.files['docpress.json']).not.toBeDefined()
  })
})
