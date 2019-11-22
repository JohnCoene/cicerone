# API

## onmount()

Runs all behaviors.

When used with jQuery, this can be passed as an event handler, eg, `$(onmount)` or `$(document).on('load', onmount)`.

```js
$(function () {
  onmount()
})

$(document).on('page:change', onmount)
```

## onmount(selector)

Runs all behaviors registered for `selector`.

Useful for unit tests to run a single behavior.

```js
onmount('.js-popup')
```

## onmount(selector, init())

Registers a behavior for `selector` to run the callback `init()`.

```js
onmount('.js-popup', function () {
  this.addEventListener('click', /*...*/)
})
```

## onmount(selector, init(b), exit(b), [options])

Registers a behavior for `selector` to run the callback `init()`. The `exit()` callback will be called once the behavior is triggered again but the element is no longer attached to the DOM.

The callbacks are passed an object `b`, and  the same object is passed for both `init` and `exit`. This allows them to communicate and keep aware of state. A string ID is also provided, `b.id`, which is guaranteed unique for every behavior-element pair.

### Options

`options` is an optional object. It supports the following keys:

- `detectMutate` - if *true*, the exit handler will be called if the element no longer matches the selector, even if it's still in the DOM. If *false*, the exit handler will only be called if the element is actually removed from the DOM tree. (default *false*) (new in v1.3)

```js
onmount('.js-popup', function (b) {
  b.handler = function () { /*...*/ }
  window.addEventListener('resize', handler)
}, function (b) {
  window.removeEventListener('resize', handler)
})
```

## onmount.teardown()

Forces the teardown of all currently-applied behaviors. This triggers the exit handlers for all behaviors currently on the page.

## onmount.reset()

Clears all defined behaviors. Useful for tests.

## onmount.observe()

Automatically invoke when new DOM elements appear using MutationObserver API. Returns `true` if it succeeds.

## onmount.unobserve()

Turns off observation previously turned on via `onmount.observe()`.

## onmount.debug

Set this to `true` to see debug messages.
