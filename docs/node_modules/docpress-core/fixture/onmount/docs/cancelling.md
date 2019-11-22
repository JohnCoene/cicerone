# Cancelling

You can cancel an initialization by returning `false`. This makes it so that the initialization will run again when `init` is triggered again.

This is also available for exit callbacks.

```js
$.onmount('.expandable-nav', function () {
  if ($(this).is(':hidden')) return false

  /* ... */
})
```

<br>
