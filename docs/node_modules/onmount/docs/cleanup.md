# Performing cleanups

When your behavior modifies things outside itself (eg, binds events to the `document` element), you might want to clean up when the behavior is removed. Just pass a 2nd function to `onmount()`.

In this example below, behaviors are checked once dialog boxes are opened and closed (`$.onmount()`). When it's called after closing, it will see that the old `.js-sticky` element is not part of the document anymore, and its exit callback will be called.

```js
$.onmount('.js-sticky', function () {
  $(document).on('scroll.sticky', function () {
    // do stuff
  })
}, function () {
  $(document).off('scroll.sticky')
})

$(function () { $.onmount() })
$(document).on('show.bs.modal close.bs.modal', function () { $.onmount() })
```
