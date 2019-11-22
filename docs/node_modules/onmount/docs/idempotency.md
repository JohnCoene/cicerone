# Idempotency

You can call `$.onmount()` as much as you like. This will skip any behavior initialization for DOM nodes that have already been initialized. This is done to account for any new elements that may appear in your DOM.

```js
// add more content
$('#content').append(...)

$.onmount()
```

This allows you to set up polling checkpoints to trigger new behaviors on certain events.
Great for events such as [Bootstrap events] or [Turbolinks load].

Also, when used with jQuery, `onmount` can be passed as an event handler, eg,
`$(onmount)`.

```js
$(document)
  .on('ready show.bs closed.bs load page:change', $.onmount)
```

[Bootstrap events]: http://getbootstrap.com/javascript/
[Turbolinks load]: https://github.com/rails/turbolinks#events
