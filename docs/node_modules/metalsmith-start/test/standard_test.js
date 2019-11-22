/* global describe, it */
describe('coding style', function () {
  this.timeout(5000)

  it('conforms to standard', require('mocha-standard').files([
    'lib/**/*.js',
    'index.js',
    'bin/*'
  ]))

  it('tests conform to standard', require('mocha-standard').files([
    'test/**/*.js'
  ], {
    global: [
      'describe', 'it', 'before', 'after', 'beforeEach', 'afterEach',
      'xdescribe', 'xit', 'expect'
    ]
  }))
})
