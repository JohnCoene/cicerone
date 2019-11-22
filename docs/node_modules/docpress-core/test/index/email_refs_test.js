const compile = require('../../index')()
var ms

describe('index/invalid refs:', function () {
  beforeEach(function () {
    // Mock metalsmith object
    ms = {
      directory () { return __dirname },
      metadata () { return { docs: 'docs' } }
    }
  })

  it('allows emails', function (done) {
    this.files = {
      'README.md': {
        contents: 'email me <hello@gmail.com>'
      }
    }

    compile(this.files, ms, done)
  })
})
