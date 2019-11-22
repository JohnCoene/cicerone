# onmount

**Run something when a DOM element appears and when it exits.**<br>
No dependencies. Legacy IE compatible. 1kb .min.gz.

[![Status](https://travis-ci.org/rstacruz/onmount.svg?branch=master)](https://travis-ci.org/rstacruz/onmount "See test builds")

<br>

## Overview

**Detecting elements:**
Run something to initialize an element on its first appearance.

```js
onmount = require('onmount')

onmount('.push-button', function () {
  $(this).on('click', function () {
    alert('working...')
  })
})
```

**Polling for changes:**
Call `$.onmount()` everytime your code changes.
[(more...)](/docs/idempotency.md)
[(automatic?)](/docs/automatic-observation.md)

```js
$('<button class="push-button">Do something</button>')
  .appendTo('body')

$.onmount()

$(".push-button").click()  //=> 'working...'
```

**jQuery integration:**
jQuery is optional; use it to poll on popular events. [(more...)](/docs/idempotency.md)

```js
$(document).on('ready show.bs closed.bs load page:change', function () {
  $.onmount()
})
```

**Cleanups:**
Supply a 2nd function to *onmount()* to execute something when the node is first detached.
[(more...)](/docs/cleanup.md)

```js
$.onmount('.push-button', function () {
  /*...*/
}, function () {
  alert('button was removed')
})

document.body.innerHTML = ''

$.onmount() //=> 'button was removed'
```

<br>

## What for?

Onmount is a safe, reliable, idempotent, and testable way to attach JavaScript behaviors to DOM nodes. It's great for common websites that are not Single-Page Apps. Read:

- [Premise](/docs/premise.md)
- [rsjs][rsjs] (Reasonable System for JavaScript Structure)

<br>

## Usage

```
npm install onmount
bower install onmount
```

```js
// With CommonJS/AMD (ie, Browserify):
   onmount = require('onmount')
   
// with no module loaders:
   window.onmount
  
// with jQuery:
   $.onmount
```

[Bootstrap events]: http://getbootstrap.com/javascript/
[Turbolinks load]: https://github.com/rails/turbolinks#events
[idempotent]: https://en.wiktionary.org/wiki/idempotent
[Browserify]: http://browserify.org/


<br>

## API

* `onmount()`

  > Runs all behaviors.
  >
  > When used with jQuery, this can be passed as an event handler, eg, `$(onmount)` or `$(document).on('load', onmount)`.

* `onmount(selector)`

  > Runs all behaviors registered for `selector`.

* `onmount(selector, init())`

  > Registers a behavior for `selector` to run the callback `init()`.

* `onmount(selector, init(b), exit(b))`

  > Registers a behavior for `selector` to run the callback `init()`. The `exit()` callback will be called once the behavior is triggered again but the element is no longer attached to the DOM.
  >
  > The callbacks are passed an object `b`, and  the same object is passed for both `init` and `exit`. This allows them to communicate and keep aware of state.
  >
  > An ID is also provided, `b.id`, which is guaranteed unique for every behavior-element pair.

* `onmount.reset()`

  > Clears all defined behaviors. Useful for tests.

* `onmount.observe()`

  > Automatically invoke when new DOM elements appear using MutationObserver API. Returns `true` if it succeeds.

* `onmount.unobserve()`

  > Turns off observation previously turned on via `onmount.observe()`.

* `onmount.debug`

  > Set this to `true` to see debug messages.

<br>

## Browser compatibility

All modern browsers and IE8+. For legacy IE, use it with jQuery 1.x.

Try the [test suite](https://rawgit.com/rstacruz/onmount/master/test/index.html) in your browser. Try it [with jQuery 1.x](https://rawgit.com/rstacruz/onmount/master/test/jquery.html) for legacy browsers.

<br>

## Read more

* [Read documentation →](http://ricostacruz.com/onmount/)
* [See examples →](https://github.com/rstacruz/onmount/examples)

<br>

## Thanks

**onmount** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/onmount/contributors
[rsjs]: https://github.com/rstacruz/rsjs

[![](https://img.shields.io/badge/%E2%9C%93-collaborative_etiquette-brightgreen.svg)](http://git.io/col)
