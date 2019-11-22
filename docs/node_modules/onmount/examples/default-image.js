/* global $, onmount */

/*
 * Loads default images when an image fails to load.
 */

$.onmount('img[data-default-src]', function () {
  $(this).on('error', function () {
    var defaultSrc = $(this).data('default-src')
    $(this).attr('src', defaultSrc)
  })
})

/*
 * Or without jQuery:
 */

onmount('img[data-default-src]', function () {
  this.addEventListener('error', function () {
    this.setAttribute('src', this.getAttribute('data-default-src'))
  })
})

$($.onmount)
