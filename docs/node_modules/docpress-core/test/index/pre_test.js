const compile = require('../../index')()

describe('index/pre:', function () {
  beforeEach(function (done) {
    var ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }

    this.files = {
      'docs/README.md': {
        contents: '* [Readme](/README.md)\n'
      },
      'README.md': {
        contents: '```js\nwindow.alert()\n```'
      }
    }

    compile(this.files, ms, (err) => {
      if (err) throw err
      done()
    })
  })

  it('renders index.html with syntax highlighting', function () {
    const idx = this.files['index.html']
    expect(idx.contents).toEqual(
      '<pre><code class="lang-js">' +
      '<span class="pl-c1">window</span>.alert()\n' +
      '</code></pre>\n')
  })
})
