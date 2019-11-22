var test = require('tape')
var onmount = require('../index')
var el = require('./helpers').el
var remove = require('./helpers').remove
var around = require('tape-around')

var mountingTest = around(test, 'mounting:')
  .before(function (t) {
    onmount('.my-behavior', function () { this.innerHTML += '(on)' })
    var div = el('div', { 'class': 'my-behavior' })
    t.next(div)
  })
  .after(function (t, div) {
    remove(div)
    onmount.reset()
    t.end()
  })

mountingTest('onmount(selector)', function (t, div) {
  onmount('.my-behavior')
  t.equal(div.innerHTML, '(on)', 'works')
  t.end()
})

mountingTest('onmount(selector) idempotency', function (t, div) {
  onmount('.my-behavior')
  onmount('.my-behavior')
  onmount('.my-behavior')
  t.equal(div.innerHTML, '(on)', "doesn't get called multiple times")
  t.end()
})

mountingTest('onmount()', function (t, div) {
  onmount()
  t.equal(div.innerHTML, '(on)', 'works')
  t.end()
})

mountingTest('onmount() idempotency', function (t, div) {
  onmount()
  onmount()
  onmount()
  t.equal(div.innerHTML, '(on)', "doesn't get called multiple times")
  t.end()
})

mountingTest('no exit handler', function (t, div) {
  onmount()
  div.parentNode.removeChild(div)
  onmount()
  t.pass('works even without an exit handler')
  t.end()
})
