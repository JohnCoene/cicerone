# Automatic observation

You can turn on automatic observation via the [MutationObserver] API. Not supported in Opera and IE10 and below. (*experimental*)

```js
onmount.observe()
```

Considering not all browsers support this, you can set up fallbacks via:

```js
if (!$.onmount.observe()) {
  $(document)
    .ready($.onmount)
    .on('show.bs hide.bs load', $.onmount)
}
```

While this is convenient, it is not recommended as it can accrue some performance penalty by checking every DOM insertion that happens in realtime. Consider this an experimental feature and subject to future optimizations.

[MutationObserver]: https://developer.mozilla.org/en/docs/Web/API/MutationObserver
