const compile = require('../../index')()

describe('index:', function () {
  beforeEach(function (done) {
    // Mock metalsmith object
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents: [
          '# toc',
          '',
          '* [Readme](/README.md)',
          '* [Getting started](/docs/getting-started.md)'
        ].join('\n') + '\n'
      },
      'docs/getting-started.md': {
        contents: '# getting started\n'
      },
      'README.md': {
        contents: '# hello\n'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renders index.html', function () {
    const idx = this.files['index.html']
    expect(idx).toEqual(expect.any(Object))
    expect(idx.title).toEqual('Readme')
    expect(idx.contents).toEqual('<h1 id="hello">hello</h1>\n')
    expect(idx.markdown).toEqual(expect.any(String))
    expect(idx.source).toEqual('README.md')
    expect(idx.slug).toEqual('index')
  })

  describe('toc.json:', function () {
    beforeEach(function () {
      this.tocFile = this.files['_docpress.json']
      this.toc = JSON.parse(this.tocFile.contents).toc
    })

    it('renders.json', function () {
      expect(this.toc.sections).toEqual(expect.any(Array))
      expect(this.toc.sections.length).toEqual(2)
    })

    it('renders the first section', function () {
      const section = this.toc.sections[0]
      expect(section).toEqual(expect.any(Object))
      expect(section).toEqual({
        title: 'Readme',
        source: 'README.md',
        url: 'index.html',
        slug: 'index'
      })
    })
  })
})
