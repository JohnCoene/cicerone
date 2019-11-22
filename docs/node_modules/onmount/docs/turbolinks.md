# Using with Turbolinks

onmount is a perfect fit with projects that use Turbolinks. You'll notice that jQuery's `document` `ready` event is not friendly for Turbolinks applications. You should call `$.onmount()` when Turbolinks changes pages.

## Turbolinks v5

The event is `turbolinks:load` for Turbolinks 5. You will also need to teardown behaviors on `turbolinks:before-cache` ([info](https://github.com/turbolinks/turbolinks/issues/30#issuecomment-195803051)).

```js
$(document).on('ready turbolinks:load', function () { $.onmount() })
$(document).on('turbolinks:before-cache', function () { $.onmount.teardown() })
```

Discussion on this setup may be found [here](https://github.com/rstacruz/onmount/issues/47#issuecomment-196751735).

## Turbolinks v2

The event is `page:change` For Turbolinks 2 and below.

```js
$(document).on('ready page:change', function () { $.onmount() })
```