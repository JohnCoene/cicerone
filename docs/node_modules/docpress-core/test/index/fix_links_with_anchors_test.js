const compile = require('../../index')()

describe('index/fix links with anchors:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [Hi](../README.md)\n' +
          '* [Introduction](/docs/introduction.md)\n' +
          '* [Getting started](/docs/getting-started.md)\n'
      },
      'README.md': {
        contents: '# hi'
      },
      'docs/getting-started.md': {
        contents: 'hi'
      },
      'docs/introduction.md': {
        contents: '[getting started](getting-started.md#xyz)'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('works', function () {
    expect(this.files['introduction.html'].contents).toEqual(
      '<p><a href="getting-started.html#xyz">getting started</a></p>\n'
    )
  })
})
