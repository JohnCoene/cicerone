const compile = require('../../index')()

describe('index/linkify:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [README](../README.md)\n' +
          '* [Intro](intro.md)'
      },
      'README.md': {
        contents: '# Readme'
      },
      'docs/intro.md': {
        contents: 'http://google.com'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renders', function () {
    expect(this.files['intro.html'].contents.toString()).toContain('<a href="http://google.com">')
  })
})
