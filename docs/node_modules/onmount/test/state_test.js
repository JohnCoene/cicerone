var test = require('tape')
var onmount = require('../index')
var around = require('tape-around')
var el = require('./helpers').el
var remove = require('./helpers').remove

var run = around(test, 'state')
  .before(function (t) {
    var state
    onmount('.our-behavior', function (b) {
      state = b
      b.number = 10
    }, function (b) {
      b.number++
    })

    var div = el('div', { 'class': 'our-behavior' })
    onmount()
    remove(div)
    onmount()
    t.next(div, state)
  })
  .after(function (t, div, state) {
    remove(div)
    onmount.reset()
    t.end()
  })

run('has an id', function (t, div, state) {
  t.ok(state['id'].match(/^c\d+$/))
  t.end()
})

run('passes the selector', function (t, div, state) {
  t.equal(state.selector, '.our-behavior')
  t.end()
})

run('works', function (t, div, state) {
  t.equal(state.number, 11)
  t.end()
})
