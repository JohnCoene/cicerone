var test = require('tape')
var onmount = require('../index')
var el = require('./helpers').el
var remove = require('./helpers').remove

if (typeof MutationObserver === 'undefined') {
  test('mutation observer', function (t) {
    t.pass('not supported on this platform')
    t.end()
  })
} else {
  test('mutation observer', function (t) {
    t.plan(1)

    onmount.observe()
    onmount('.his-behavior', function () {
      this.innerHTML += '(on)'
    })
    var div = el('div', { 'class': 'his-behavior' })

    setTimeout(function () {
      t.equal(div.innerHTML, '(on)', 'works')
      onmount.unobserve()
      onmount.reset()
      t.end()
    })
  })

  test('mutation observer', function (t) {
    t.plan(1)

    onmount.observe()
    onmount('.his-behavior', function () {
      this.innerHTML += '(on)'
    }, function () {
      this.innerHTML += '(off)'
    })

    var div = el('div', { 'class': 'his-behavior' })

    setTimeout(function () {
      remove(div)
      setTimeout(function () {
        t.equal(div.innerHTML, '(on)(off)', 'works for removal')
        onmount.unobserve()
        onmount.reset()
        t.end()
      })
    })
  })
}
