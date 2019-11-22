const compile = require('../../index')()

describe('index/invalid repo:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/intro.md': {
        contents: '# Introduction\n'
      }
    }

    compile(this.files, ms, (err) => {
      this.err = err
      done()
    })
  })

  it('throws an error without any valid files', function () {
    expect(this.err).toBeDefined()
    expect(this.err.message).toContain('Table of contents not found')
  })
})
