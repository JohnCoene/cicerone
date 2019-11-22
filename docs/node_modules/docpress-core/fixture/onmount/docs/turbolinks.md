# Using with Turbolinks

onmount is a perfect fit with projects that use Turbolinks.

You'll notice that `document.ready` is not friendly for Turbolinks applications. You should call `$.onmount()` when Turbolinks changes pages (`page:change` event).

```js
$(document).on('ready page:change', function () { $.onmount() })
```
