# Debugging

To turn debug logging on, set `onmount.debug` to `true`.

```js
onmount.debug = true
```

If you'd like to do this automatically, you can turn it on by a secret flag:

```js
onmount.debug = (window.localStorage &&
  window.localStorage['onmount_debug'] &&
  true)
```

You can turn it on in your JavaScript console by typing `localStorage.onmount_debug = true`, and turn it off with `delete localStorage.onmount_debug`.
