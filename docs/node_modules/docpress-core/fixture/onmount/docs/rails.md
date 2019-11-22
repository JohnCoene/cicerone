# Using with Rails

Use [rails-assets.org](https://rails-assets.org/) to bring `onmount` on your app.

```rb
source 'https://rails-assets.org' do
  gem 'rails-assets-onmount'
end
```

In your `application.js`, load it using `//= require`. If you're using jQuery, load it before onmount.

```js
//= require jquery
//= require onmount
```

You can then use onmount.

```js
$(document).on('ready show.bs closed.bs load page:change', function () {
  $.onmount()
})

$.onmount('.js-tooltip', function () {
  $(this).tooltip()
})
```

If you don't use jQuery, you can use `window.onmount` instead.
