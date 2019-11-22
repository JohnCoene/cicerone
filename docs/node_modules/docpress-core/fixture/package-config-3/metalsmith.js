var docpress = require('../../ms')

var app = docpress(__dirname)
  .use(require('../../')())

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}
