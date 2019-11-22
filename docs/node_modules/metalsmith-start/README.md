# metalsmith-start

Development server for metalsmith.

[![Status](https://travis-ci.org/rstacruz/metalsmith-start.svg?branch=master)](https://travis-ci.org/rstacruz/metalsmith-start "See test builds")

- Consumes the standard `metalsmith.json`.
- Consumes `metalsmith.js`.
- Auto-recompiles when files are changed.
- Starts development server and LiveReload.

<br>

## Command-line

Run `metalsmith-start` or `metalstart` in your Metalsmith's project directory.

```
metalsmith-start
```

See `--help` for more options.

<br>

## Production

metalsmith-start honors the following variables:

* `NODE_ENV`
* `PORT`

If either `NODE_ENV` is set to `production`, then development features (such as LiveReload) will be disabled by default.

This means that you can run a production setup using:

```sh
env NODE_ENV=production PORT=4000 metalsmith-start
```

This also means you can push your repo to Heroku with no changes and it'll work just fine.

<br>

## Using metalsmith.js

If a file called `metalsmith.js` is found in the current directory, it's assumed it's a JS module that returns a `Metalsmith` instance.

Below is a sample metalsmith.js:

```js
var Metalsmith = require('metalsmith')

var app = Metalsmith(__dirname)
  .source('./src')
  .destination('./public')
  .use(...)

if (module.parent) {
  module.exports = app
} else {
  app.build(function (err) { if (err) throw err })
}
```

<br>

## Superstatic

If `superstatic.json` is found in the current directory, it'll automatically be picked up. This allows you to, say, use `cleanUrls` to allow pages to be served without the `.html` extension.

See [superstatic] for more information.

[superstatic]: https://www.npmjs.com/package/superstatic

<br>

## Programatic usage

```js
var Runner = require('metalsmith-start').Runner

var ms = new Metalsmith(dir)
  .use(...)
  .use(...)

var r = new Runner(ms)
r.start(function () {
  console.log('started on ' + r.port)
})
```

<br>

## Thanks

**metalsmith-start** © 2015+, Rico Sta. Cruz. Released under the [MIT] License.<br>
Authored and maintained by Rico Sta. Cruz with help from contributors ([list][contributors]).

> [ricostacruz.com](http://ricostacruz.com) &nbsp;&middot;&nbsp;
> GitHub [@rstacruz](https://github.com/rstacruz) &nbsp;&middot;&nbsp;
> Twitter [@rstacruz](https://twitter.com/rstacruz)

[MIT]: http://mit-license.org/
[contributors]: http://github.com/rstacruz/metalsmith-start/contributors
