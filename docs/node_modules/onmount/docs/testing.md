# Testing behaviors

You can trigger just one onmount via `$.onmount(SELECTOR)`. This is useful for tests.

```js
var $div

beforeEach(function () {
  $div = $("<div class='js-user-profile' data-user='rstacruz'>")
    .appendTo('body')

  $.onmount('.js-user-profile')
})

afterEach(function () {
  $div.remove()
})

it('renders an avatar', function () {
  expect($div.html()).to.include("<img src='avatars/rstacruz.png'>")
})
```
