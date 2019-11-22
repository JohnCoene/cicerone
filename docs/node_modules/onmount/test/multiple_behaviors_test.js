var test = require('tape')
var onmount = require('../index')
var around = require('tape-around')
var el = require('./helpers').el
var remove = require('./helpers').remove

var run = around(test, 'multiple behaviors per selector:')
  .before(function (t) {
    onmount('.nobodys-behavior', function () {
      this.innerHTML += '(1)'
    })

    onmount('.nobodys-behavior', function () {
      this.innerHTML += '(2)'
    })

    var div = el('div', { 'class': 'nobodys-behavior' })
    t.next(div)
  })
  .after(function (t, div) {
    remove(div)
    onmount.reset()
    t.end()
  })

run('runs both behaviors', function (t, div) {
  onmount()
  t.equal(div.innerHTML, '(1)(2)')
  t.end()
})

run('runs both in onmount(selector)', function (t, div) {
  onmount('.nobodys-behavior')
  t.equal(div.innerHTML, '(1)(2)')
  t.end()
})
