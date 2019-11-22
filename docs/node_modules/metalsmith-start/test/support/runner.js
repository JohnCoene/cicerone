var Runner = require('../../lib/runner')
var getport = require('get-port')

module.exports = function runner (path) {
  global.before(function () {
    return getport().then(function (port) {
      this.port = port
    }.bind(this))
  })

  global.before(function () {
    this.run = new Runner(path, { port: this.port })
    this.run.log = function () {}
    return this.run.start()
  })

  global.after(function () {
    this.run.close()
  })
}
