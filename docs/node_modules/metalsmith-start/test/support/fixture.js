var path = require('path')
var fs = require('fs')

module.exports = fixture

function fixture (name) {
  return path.join(__dirname, '../../fixtures', name)
}

fixture.file = function (name) {
  return fs.readFileSync(fixture(name), 'utf-8')
}
