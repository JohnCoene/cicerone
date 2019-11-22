var test = require('tape')
var onmount = require('../index')
var around = require('tape-around')
var el = require('./helpers').el
var remove = require('./helpers').remove

var exitingTest = around(test, 'exiting:')
  .before(function (t) {
    onmount('.their-behavior', function () {
      this.innerHTML += '(on)'
    }, function () {
      this.innerHTML += '(off)'
    })
    t.end()
  })
  .after(function (t) {
    onmount.reset()
    t.end()
  })

exitingTest('calls the unloader', function (t) {
  var div = el('div', { 'class': 'their-behavior' })
  onmount()
  remove(div)
  onmount()

  t.equal(div.innerHTML, '(on)(off)', 'ok')
  t.end()
})

exitingTest('using onmount.teardown()', function (t) {
  var div = el('div', { 'class': 'their-behavior' })
  onmount()
  onmount.teardown()

  t.equal(div.innerHTML, '(on)(off)', 'ok')
  t.end()
})

exitingTest('gets double-applied intentionally', function (t) {
  var div = el('div', { 'class': 'their-behavior' })
  onmount()
  remove(div)
  onmount()
  document.body.appendChild(div)
  onmount()

  t.equal(div.innerHTML, '(on)(off)(on)', 'ok')
  t.end()
})
