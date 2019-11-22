# Premise

Onmount is a safe, reliable, idempotent, and testable way to attach JavaScript behaviors to DOM nodes.

* It's great for common websites that are not Single-Page Apps.
* It goes hand-in-hand with Turbolinks.

## Example

Given this HTML snippet:

```html
<div class='js-expandable-nav'>
  <a href=''>Home</a>
  <a href=''>Inbox</a>
  <a href=''>Messages</a>
  
  <div class='more'>
    <a href=''>Help</a>
    <a href=''>Support</a>
  </div>
  
  <button>more...</button>
</div>
```

Typically, to make this work, you'll make code like this:

```js
$(function () {
  $('.js-expandable-nav button').on('click', function () {
    $('.js-expandable-nav .more').show()
    $('.js-expandable-nav button').hide()
  })
})
```

## Problems

However, you have a few problems with this approach.

* __It's not testable.__ You can't make unit tests from this code.
* __Assumes just one instance.__ When there are 2 .js-expandable-nav elements in the page, this will break.
* __It doesn't work in modal dialogs.__ Since it works in `$(function() { ... })`, it doesn't work on elements loaded later.
* __There's no provision for cleanups.__ What happens when `.js-expandable-nav` exits the DOM (eg, the dialog box was closed)?

## Solution

Behaviors solve that. You don't write your code any differently, but it will be accessible in a way that it's testable, isolated, and idempotent.

```js
/*
 * initializes behaviors on jQuery document.ready, Turbolinks page:change, and
 * on bootstrap modal show.
 */

$(document).on('ready page:change show.bs.modal', function () { $.onmount() })

/*
 * attach a behavior to `.js-expandable-nav`
 */

$.onmount('.js-expandable-nav', function () {
  var $this   = $(this)
  var $button = $this.find('button')
  var $more   = $this.find('.more')

  $button.on('click', function () {
    $more.toggle()
    $button.hide()
  })
})
```

## Benefits

By simply wrapping your code in `$.onmount(...)` instead of `$(function)`, it gives you the power of a few features:

* You're assured that the block will only run once for every `.js-expandable-nav` element.

* You can retrigger this behavior for tests.

* You can call behaviors again and again (`$.onmount()`) every time your DOM changes to make it work for any new elements.
