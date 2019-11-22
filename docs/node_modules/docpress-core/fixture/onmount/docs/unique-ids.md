# Unique IDs

The `init()` and `exit()` callbacks get passed an object with a unique ID. This ID is guaranteed to be unique for every behavior-element pair. It looks like this:

> `{ id: 'c12' }`

This makes it possible to assign event handlers with tags that are unique to that behavior-and-element so that it may be unbound later.

```js
$.onmount('@hiding-menu', function (b) {
  $('html, body').on('scroll.' + b.id, function () {
  })
}, function (b) {
  $('html, body').off('scroll.' + b.id)
})
```
