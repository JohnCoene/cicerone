# Premise

Onmount is a safe, reliable, idempotent, and testable way to attach JavaScript behaviors to DOM nodes. It's great for common websites that are not Single-Page Apps, and it goes hand-in-hand with Turbolinks.

#### Once and only once

It solves many problems that crop up on sites where the DOM changes often, such as when using with Turbolinks or Pjax. Onmount assures you that each behavior is only applied *once* to an element and never again so you don't get duplicate event handlers and such. This is a concept called [idempotence].

[idempotence]: https://en.wikipedia.org/wiki/Idempotence

#### Testability

Onmount allows you to re-run certain behaviors. This is great for making isolated unit tests of your code.

#### Reusable

Code written in `onmount` blocks operate in the context of a single DOM element. It can be applied again other DOM elements later on and will be running in isolation from other instances.

## Example

Let's build a navigation with some elements hidden under a *more...* button. Given this HTML snippet:

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

To make this work, you'll typically write JavaScript code like this:

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

- **Not testable** — You can't make unit tests from this code. To test this, you will need to load the entire page, simulate a click, and see if it worked. There's no easy way to test it in isolation.
- **Not reusable** — When there are 2 `.js-expandable-nav` elements in the page, this will break. This isn't a concern at first, but it certainly hampers code reusability.
- **Not for dialog boxes** — Since it triggers on a `document.ready` event, it doesn't work on elements loaded later. There's no easy way to retrigger this code, either, which you would want to do for when content is loaded remotely (like in a dialog box).
- **No cleanups** — What happens when `.js-expandable-nav` exits the DOM (eg, the dialog box was closed)? In a more complex scenario, you will want to do cleanup such as unbinding event handlers.

## Solution

By writing your code in an `onmount` block, this will solve the issues above. You don't write your code any differently, but it will be accessible in a way that it's testable, isolated, and idempotent.

```js
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

This block is called a *behavior*—that is, a piece of JavaScript that defines what dynamic behavior happens (eg, menu expands on button click) for a given selector (eg, `.js-expandable-nav`). This is a concept first seen in legacy IE as [DHTML behaviors].

[DHTML behaviors]: https://msdn.microsoft.com/en-us/library/ms531079%28v=vs.85%29.aspx

```js
/*
 * initializes behaviors on jQuery document.ready, Turbolinks page:change, and
 * on bootstrap modal show.
 */

$(document).on('ready page:change show.bs.modal', function () { $.onmount() })
```

## Benefits

By simply wrapping your code in `$.onmount(...)` instead of `$(function)` (aka `document.ready`), it gives you the power of a few features:

* **Idempotent** — You're assured that the block will only run once for every `.js-expandable-nav` element. If it has been applied before, it will not apply again.
* **Reusable** — You can retrigger this behavior for tests. This allows you to create an isolated test for the behavior.
* **Reusable** — You can call behaviors again and again (`$.onmount()`) every time your DOM changes to make it work for any new elements. This is useful for in-page transitions with Turbolinks or Pjax, or for dynamically-loaded content such as modal boxes.
