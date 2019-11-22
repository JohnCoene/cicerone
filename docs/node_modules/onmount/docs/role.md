# Role attributes

Some recommend [using the role attribute][rsjs] to bind your behaviors. To aid this, you can define behaviors as `@xxxx`, which is shorthand of `[role~="xxxx"]`. (This convention is taken from [jquery-role].)

```js
$.onmount('@hiding-menu', function () {
  /* ... */
})

/* same as $.onmount('[role~="hiding-menu"]', ...) */
```

[rsjs]: https://github.com/rstacruz/rsjs
[jquery-role]: https://github.com/kossnocorp/role
