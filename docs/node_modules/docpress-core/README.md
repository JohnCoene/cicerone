# docpress-core

Metalsmith plugin to generate Docpress site data from a project. Part of the [Docpress] project.

![Last version](https://img.shields.io/github/tag/docpress/docpress-core.svg?style=flat-square)
[![Build Status](http://img.shields.io/travis/docpress/docpress-core/master.svg?style=flat-square)](https://travis-ci.org/docpress/docpress-core)
[![Coverage Status](https://img.shields.io/coveralls/docpress/docpress-core.svg?style=flat-square)](https://coveralls.io/github/docpress/docpress-core)
[![Dependency status](http://img.shields.io/david/docpress/docpress-core.svg?style=flat-square)](https://david-dm.org/docpress/docpress-core)
[![Dev Dependencies Status](http://img.shields.io/david/dev/docpress/docpress-core.svg?style=flat-square)](https://david-dm.org/docpress/docpress-core#info=devDependencies)
[![NPM Status](http://img.shields.io/npm/dm/docpress-core.svg?style=flat-square)](https://www.npmjs.org/package/docpress-core)

## What it does

This plugin generates _bare_ HTML files (just rendered from Markdown) from a project. It also creates a `_docpress.json` with table of contents and index. This is usually used with [docpress-base], which will then prettify those pages into a full-fleged website.

## API

You get these modules:

- `docpress-core` The main Metalsmith middleware.
- `docpress-core/ms` - Metalsmith instance generator.

In a bare Metalsmith site, you use them together like so:

```js
var app = require('docpress-core/ms')(cwd)
  .use(require('docpress-core')())
  .use(require('docpress-base')())
```

[Docpress]: https://github.com/docpress/docpress
[docpress-base]: https://github.com/docpress/docpress-base
