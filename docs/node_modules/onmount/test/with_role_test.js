var test = require('tape')
var onmount = require('../index')
var around = require('tape-around')
var el = require('./helpers').el
var remove = require('./helpers').remove

var run = around(test, 'with role:')
  .before(function (t) {
    onmount('[role~="your-behavior"]', function () {
      this.innerHTML += '(on)'
    })
    var div = el('div', { role: 'your-behavior' })
    t.next(div)
  })
  .after(function (t, div) {
    remove(div)
    onmount.reset()
    t.end()
  })

run('works', function (t, div) {
  onmount()
  t.equal(div.innerHTML, '(on)')
  t.end()
})

run('works with onmount(selector)', function (t, div) {
  onmount('[role~="your-behavior"]')
  t.equal(div.innerHTML, '(on)')
  t.end()
})
