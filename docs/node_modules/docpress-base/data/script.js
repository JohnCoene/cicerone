var Pjax = require('pjax')
var Nprogress = require('nprogress')
var onmount = require('onmount')
var toggleClass = require('dom101/toggle-class')
var ready = require('dom101/ready')
var Scrolltrack = require('./scrolltrack')
var Scrollclass = require('./scrollclass')

/*
 * pjax/nprogress
 */

void (function () {
  ready(function () {
    new Pjax({ // eslint-disable-line
      selectors: ['.body', '.toc-menu', 'title'],
      analytics: sendPageview
    })
  })

  ready(sendPageview)

  function sendPageview () {
    var title = document.querySelector('title')
    if (window.ga) {
      window.ga('send', 'pageview', {
        page: window.location.href,
        title: title && title.text
      })
    }
  }

  document.addEventListener('pjax:send', function () {
    Nprogress.start()
  })

  document.addEventListener('pjax:error', function () {
    Nprogress.done()
  })

  document.addEventListener('pjax:complete', function () {
    Nprogress.done()
  })
}())

/*
 * menu toggle
 */

onmount('.js-menu-toggle', function () {
  this.addEventListener('click', function () {
    toggleClass(document.body, '-menu-visible')
  })
})

/*
 * onmount
 */

void (function () {
  ready(function () {
    onmount()
  })

  document.addEventListener('pjax:complete', function () {
    onmount()
  })
}())

/*
 * scrolltrack
 */

void (function () {
  var st = new Scrolltrack({
    menu: '.toc-menu',
    selector: 'h2, h3',
    onupdate: function (active, last) {
      var menu = document.querySelector('.toc-menu')
      var link = menu.querySelector('.link.-active, .link.-notactive')

      toggleClass(link, '-active', !active)
      toggleClass(link, '-notactive', active)
    }
  })

  document.addEventListener('pjax:complete', function () {
    st.update()
  })

  ready(function () {
    st.update()
  })
}())

void (function () {
  onmount('.footer-nav', function (b) {
    b.sc = Scrollclass(this, {
      className: '-expanded',
      onscroll: function (y) {
        return this.maxScroll - y < 88
      }
    })
  }, function (b) {
    b.sc.destroy()
  })
}())

void (function () {
  onmount('.header-nav', function (b) {
    b.sc = Scrollclass(this, {
      className: '-expanded',
      onscroll: function (y) { return y < 40 }
    })
  }, function (b) {
    b.sc.destroy()
  })
}())
