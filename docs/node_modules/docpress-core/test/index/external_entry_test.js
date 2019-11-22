const compile = require('../../index')()

describe('index/external pages:', function () {
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
          '* [Report an issue](https://github.com/docpress/docpress-core/issues/new)'
        ].join('\n') + '\n'
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

  it('works', function () {
    const entry1 = this.files['_docpress.json'].toc.sections[1]
    expect(entry1.title).toEqual('Report an issue')
    expect(entry1.url).toEqual('https://github.com/docpress/docpress-core/issues/new')
    expect(entry1.source).toEqual('https://github.com/docpress/docpress-core/issues/new')
  })
})
