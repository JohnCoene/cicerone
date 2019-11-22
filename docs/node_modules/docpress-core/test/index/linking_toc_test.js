const compile = require('../../index')()

describe('index/linking toc:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [My project](../README.md)\n' +
          '* [TOC](./README.md)\n'
      },
      'README.md': {
        contents: '# My project\n'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renames index.md', function () {
    expect(this.files['index-2.html']).toBeDefined()
  })

  it('creates slugs', function () {
    expect(this.files['index.html'].slug).toEqual('index')
    expect(this.files['index-2.html'].slug).toEqual('index-2')
  })
})
