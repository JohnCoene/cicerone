var $ = require('jquery')
var test = require('tape')
var around = require('tape-around')
var onmount = require('../index')

test('is a working environment', function (t) {
  document.body.innerHTML = ''
  $('<div>hello</div>').appendTo('body')
  t.equal($('body')[0].innerHTML, '<div>hello</div>')
  t.equal(window.document.body.innerHTML, '<div>hello</div>')
  t.end()
})

var run = around(test, 'jquery:')
  .before(function (t) {
    var $div = $('<div class="my-behavior"></div>').appendTo('body')
    onmount('.my-behavior', function () {
      this.innerHTML += '(on)'
    })
    onmount.$ = $
    t.next($div)
  })
  .after(function (t, $div) {
    $div.remove()
    onmount.reset()
    t.end()
  })

run('is callable via dom ready', function (t, $div) {
  $(onmount)
  setTimeout(function () {
    t.equal($div.html(), '(on)')
    t.end()
  })
})

run('is callable via dom ready (verbose)', function (t, $div) {
  $(document).ready(onmount)
  setTimeout(function () {
    t.equal($div.html(), '(on)')
    t.end()
  })
})

run('is callable via dom events', function (t, $div) {
  $(document).on('onmount', onmount)
  $(document).trigger('onmount')
  setTimeout(function () {
    t.equal($div.html(), '(on)')
    t.end()
  })
})
