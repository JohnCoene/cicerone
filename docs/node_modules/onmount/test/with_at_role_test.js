var test = require('tape')
var onmount = require('../index')
var around = require('tape-around')
var el = require('./helpers').el
var remove = require('./helpers').remove

var roleTest = around(test, 'with @role:')
  .before(function (t) {
    onmount('@his-behavior', function () {
      this.innerHTML += '(on)'
    })
    t.next(el('div', { role: 'his-behavior' }))
  })
  .after(function (t, div) {
    onmount.reset()
    remove(div)
    t.end()
  })

roleTest('works', function (t, div) {
  onmount()
  t.equal(div.innerHTML, '(on)', 'ok')
  t.end()
})

roleTest('call via @', function (t, div) {
  onmount('@his-behavior')
  t.equal(div.innerHTML, '(on)', 'ok')
  t.end()
})

roleTest('call via [role]', function (t, div) {
  onmount('[role~="his-behavior"]')
  t.equal(div.innerHTML, '(on)', 'ok')
  t.end()
})
