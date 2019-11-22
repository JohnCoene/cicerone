const compile = require('../../index')()

describe('index/toc with anchor:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents:
          '* [Readme](../README.md)\n' +
          '* [Intro](intro.md#xyz)\n'
      },
      'README.md': {
        contents: '# Readme'
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

  it('sets .anchor', function () {
    expect(this.files['_docpress.json'].toc.sections[1].anchor).toEqual('#xyz')
  })
})
