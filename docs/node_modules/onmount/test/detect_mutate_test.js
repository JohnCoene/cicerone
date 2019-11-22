var test = require('tape')
var onmount = require('../index')
var el = require('./helpers').el
var remove = require('./helpers').remove
var around = require('tape-around')

var mountingTest = around(test, 'detectMutate:')
  .before(function (t) {
    onmount('.my-behavior', function () {
      this.innerHTML += '(on)'
    }, function () {
      this.innerHTML += '(off)'
    }, { detectMutate: true })
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

mountingTest('onmount(selector)', function (t, div) {
  onmount('.my-behavior')
  div.className = 'not-my-behavior'
  onmount('.my-behavior')
  t.equal(div.innerHTML, '(on)(off)', 'works')
  t.end()
})
