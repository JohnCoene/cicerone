/* global $, alert */

$.onmount('.js-clickable', function () {
  $(this).on('click', function () {
    alert('You clicked me!')
  })
})
