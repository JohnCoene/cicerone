# dom101

<!-- {.massive-header.-with-tagline} -->

> DOM manipulation utilities

dom101 is a set of utilities for manipulating the DOM as single files.<br>
*aka: Stop using jQuery.*

```js
var addClass = require('dom101/add-class');

el = document.createElement('div');
addClass(el, 'active');
```

[![Status](https://travis-ci.org/rstacruz/dom101.svg?branch=master)](https://travis-ci.org/rstacruz/dom101)  

## Why?

If you're writing a frontend library, it's best to avoid a dependency on
[jQuery]. This means having to write your own DOM manipulation code,
though. To speed you along, I've packaged all that typical DOM
manipulation code into many single-use JS files.

> #### Slim builds
> You can use [browserify] to make your final bundle and it
> will only bundle the functions it needs, instead of bundling a monolithic
> jQuery.
> 
> #### Copy-pastable
> If you don't want to include dom101 as a dependency, each
> file ([example]) stand on their own and can be easily pasted into your project.
> 
> #### Semi-legacy support
> Minimum browser fully-supported is IE8, with most of the utilities
> working with even older IE versions.

dom101 loosely follows the conventions of [101].

## Reference

| jQuery                      | dom101                                 |
| ------                      | ------                                 |
| `$(el).addClass('...')`     | [addClass](#addclass)(el, '...')       |
| `$(el).hasClass('...')`     | [hasClass](#hasclass)(el, '...')       |
| `$(el).removeClass('...')`  | [removeClass](#removeclass)(el, '...') |
| `$(el).toggleClass('...')`  | [toggleClass](#toggleclass)(el, '...') |
| `$(el).remove()`            | [remove](#remove)(el)                  |
| `$(el).text()`              | [text](#text)(el)                      |
| `$(el).text('...')`         | [text](#text)(el, '...')               |
| `$(el).before(newEl)`       | [before](#before)(el, newEl)           |
| `$(el).after(newEl)`        | [after](#after)(el, newEl)             |
| `$(el).on('click', fn)`     | [on](#on)(el, 'click', fn)             |
| `$(fn)`                     | [ready](#ready)(fn)                    |
| `$(document).ready(fn)`     | [ready](#ready)(fn)                    |
| `$(document).height()`      | [documentHeight](#documentheight)()    |
| `$(document).width()`       | [documentWidth](#documentwidth)()      |
| `$(el).outerHeight()`       | [outerHeight](#outerheight)()          |
| `$(el).outerWidth()`        | [outerWidth](#outerwidth)()            |
| `$(el).prepend(child)`      | [prepend](#prepend)(el, child)         |
| `$(el).trigger('click')`    | [trigger](#trigger)(el, 'click')       |
| `$(el).closest('selector')` | [closest](#closest)(el, 'selector')    |
| `$(el).is('selector')`      | [matches](#matches)(el, 'selector')    |

### Non-DOM utilities

| jQuery                 | dom101                               |
| ------                 | ------                               |
| `$.each(list, fn)`     | [each](#each)(list, fn)              |
| `$.map(list, fn)`      | [map](#map)(list, fn)                |
| `$.extend(...)`        | [extend](#extend)(...)               |
| `$.extend(true, ...)`  | [deepExtend](#deepextend)(...)       |
| `$.isPlainObject(obj)` | [isPlainObject](#isplainobject)(obj) |

### Aliases

Some aliases for DOM functions are also added for convenience.

| DOM                              | dom101                                     |
| ---                              | ------                                     |
| `document.querySelector(...)`    | [querySelector](#queryselector)(...)       |
| `document.querySelectorAll(...)` | [querySelectorAll](#queryselectorall)(...) |

### Not implemented

Some DOM helpers aren't implemented, because they're easy enough to do with plain DOM API:

| jQuery                              | DOM                                |
| ------                              | ---                                |
| `$('...')`                          | `document.querySelectorAll('...')` |
| `$(el).attr('tabindex')`            | `el.getAttribute('tabindex')`      |
| `$(el).attr('tabindex', 3)`         | `el.setAttribute('tabindex', 3)`   |
| `$(el).css('border-radius', '3px')` | `el.style.borderRadius = '3px'`    |
| `$(el).html()`                      | `el.innerHTML`                     |
| `$(el).html('...')`                 | `el.innerHTML = '...'`             |
| `$(el).parent()`                    | `el.parentNode`                    |
| `$(el).clone()`                     | `el.cloneNode(true)`               |
| `$(el).children()`                  | `el.children`                      |
| `$el.find('...')`                   | `el.querySelectorAll('...')`       |
| `$el.blur()`                        | `el.blur()`                        |
| `$el.focus()`                       | `el.focus()`                       |
| `$el.append(child)`                 | `el.appendChild(child)`            |
| `$el.prop('checked')`               | `el.checked`                       |
| `$el.prop('checked', true)`         | `el.checked = true`                |
| `$el.prop('disabled')`              | `el.disabled`                      |
| `$el.prop('disabled', true)`        | `el.disabled = true`               |

## Install

dom101 is available via [npm]. Perfect for use with [browserify].

    $ npm install --save dom101

[npm]: https://www.npmjs.org/package/dom101
[browserify]: https://browserify.org

[![npm version](http://img.shields.io/npm/v/dom101.svg?style=flat)](https://npmjs.org/package/dom101 "View this project on npm")

## API Reference

<!--api-->

### addClass

> `addClass(el, className)`

Adds a class name to an element. Compare with `$.fn.addClass`.

```js
var addClass = require('dom101/add-class');

addClass(el, 'active');
```

### after

> `after(el, newEl)`

Inserts a new element `newEl` just after `el`.

```js
var after = require('dom101/after');
var newNode = document.createElement('div');
var button = document.querySelector('#submit');

after(button, newNode);
```

### before

> `before(el, newEl)`

Inserts a new element `newEl` just before `el`.

```js
var before = require('dom101/before');
var newNode = document.createElement('div');
var button = document.querySelector('#submit');

before(button, newNode);
```

### closest

> `closest(el, selector)`

Looks for the closest ancestor of element `el` that matches `selector`.
Compare with [$.fn.closest](http://api.jquery.com/closest/).

```js
var closest = require('dom101/closest');

closest(input, 'label');
```

### deepExtend

> `deepExtend(dest, src1, [src2 ...])`

Extends object `dest` with properties from sources `src`.
Compare with [$.extend(true)](http://api.jquery.com/jquery.extend/).
Also consider [deep-extend].

[deep-extend]: http://npmjs.com/deep-extend

```js
var deepExtend = require('dom101/deep-extend');
deepExtend({}, defaults, options);
```

### documentHeight

> `documentHeight()`

Returns the height of the document.
Compare with jQuery's `$(document).height()`.

```js
var documentHeight = require('dom101/document-height');

var height = documentHeight();
```

### documentWidth

> `documentWidth()`

Returns the width of the document.
Compare with jQuery's `$(document).width()`.

```js
var documentWidth = require('dom101/document-width');

var width = documentWidth();
```

### each

> `each(list, fn)`

Iterates through `list` (an array or an object). This is useful when dealing
with NodeLists like `document.querySelectorAll`.

```js
var each = require('dom101/each');
var qa = require('dom101/query-selector-all');

each(qa('.button'), function (el) {
  addClass('el', 'selected');
});
```

### extend

> `extend(dest, src1, [src2 ...])`

Extends object `dest` with properties from sources `src`.
Compare with [$.extend](http://api.jquery.com/jquery.extend/).
Also consider [object-assign] and the built-in `Object.assign`.

[object-assign]: http://npmjs.com/object-assign

```js
var extend = require('dom101/extend');
extend({}, defaults, options);
```

### hasClass

> `hasClass(el, className)`

Checks if an element has a given class name.

```js
var hasClass = require('dom101/has-class');

el.className = 'selected active';
hasClass(el, 'active') //=> true
```

### exports

this file is only provided for convenience and for tests.
it's not advised to use it.

### isPlainObject

> `isPlainObject(obj)`

Checks if `obj` is an object created with `{}` or `new Object`.
Compare with [$.isPlainObject](http://api.jquery.com/jquery.isplainobject/).

```js
var isPlainObject = require('dom101/is-plain-object');

isPlainObject({}) //=> true
isPlainObject([]) //=> false
```

### map

> `map(list, fn)`

Iterates through `list` (an array or an object).

```js
var map = require('dom101/map');
var text = require('dom101/text');

map(qa('.button'), function (el) {
  return text(el);
});
```

### matches

> `matches(el, selector)`

Checks if a given element `el` matches `selector`.
Compare with [$.fn.is](http://api.jquery.com/is/).

```js
var matches = require('dom101/matches');

matches(button, ':focus');
```

### on

> `on(el, event, fn)`

Adds an event handler.

```js
var on = require('dom101/on');

on(el, 'click', function () {
  ...
});
```

### outerHeight

> `outerHeight(el, includeMargin)`

Returns the outer height (height + padding [+margin]) of an element as an
integer. Supports IE8+.

```js
var outerHeight = require('dom101/outer-height');
var height = outerHeight(el);
```

### outerWidth

> `outerWidth(el, includeMargin)`

Returns the outer width (width + padding [+margin]) of an element as an
integer. Supports IE8+.

```js
var outerWidth = require('dom101/outer-width');
var width = outerWidth(el);
```

### prepend

> `prepend(el, child)`

Prepends a `child` into a parent `el`. Compare with `$.fn.prepend`.

```js
var prepend = require('dom101/prepend');

prepend(el, child);
```

### querySelectorAll

> `querySelectorAll(query)`

Convenience function to access `document.querySelectorAll`.

```js
var each = require('dom101/each');
var qa = require('dom101/query-selector-all');

each(qa('.button'), function (el) {
  addClass('el', 'selected');
});
```

### querySelector

> `querySelector(query)`

Convenience function to access `document.querySelector`.

```js
var q = require('dom101/query-selector');
addClass(q('#instructions'), 'hidden');
```

### ready

> `ready(fn)`

Executes `fn` when the DOM is ready. If the DOM is already ready, the given
callback will be called immediately.

```js
var ready = require('dom101/ready');

ready(function () {
  ...
});
```

### removeClass

> `removeClass(el, className)`

Removes a classname.

```js
var removeClass = require('dom101/remove-class');

el.className = 'selected active';
removeClass(el, 'active');

el.className
=> "selected"
```

### remove

> `remove(el)`

Removes an element from the DOM.

```js
var remove = require('dom101/remove');

remove(el);
```

### scrollTop

> `scrollTop()`

Returns the scroll top value.

```js
var scrollTop = require('dom101/scroll-top');
alert(scrollTop());
```

### text

> `text(el, [value])`

Sets or gets text. Compare with `$.fn.text`.

```js
var text = require('dom101/text');

text(el, 'Hello');

text(el)
=> "Hello"
```

### toggleClass

> `toggleClass(el, className, [value])`

Adds or removes a class name to an element. If `value` is provided,
this will add the class if it's `true` or remove if it's `false`.
Compare with `$.fn.toggleClass`.

```js
var toggleClass = require('dom101/toggle-class');

// toggles on or off:
toggleClass(el, 'active');

// with a value:
var isSelected = true;
toggleClass(el, 'selected', isSelected);
```

### trigger

> `trigger(el, event)`

Triggers an event `event`. Only works for native events.

```js
var trigger = require('dom101/trigger');

el = document.querySelector('#button');
trigger(el, 'click');
```
<!--api:end-->

## Similar projects

 * [jQuery] (of course)
 * [youmightnotneedjquery.com] — actually takes a bunch of code from here
 * [101]
 * [bonzo]

## Thanks

**dom101** © 2014+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/dom101/contributors

[jQuery]: http://jquery.com
[browserify]: http://browserify.org
[101]: https://www.npmjs.org/package/101
[youmightnotneedjquery.com]: http://youmightnotneedjquery.com/
[example]: https://github.com/rstacruz/dom101/blob/master/add-class.js
[bonzo]: https://github.com/ded/bonzo
