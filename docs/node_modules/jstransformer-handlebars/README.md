# jstransformer-handlebars

[Handlebars.js](http://handlebarsjs.com/) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-handlebars/master.svg)](https://travis-ci.org/jstransformers/jstransformer-handlebars)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-handlebars/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-handlebars)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-handlebars/master.svg)](http://david-dm.org/jstransformers/jstransformer-handlebars)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-handlebars.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-handlebars.svg)](https://www.npmjs.org/package/jstransformer-handlebars)

## Installation

    npm install jstransformer-handlebars

## API

```js
var handlebars = require('jstransformer')(require('jstransformer-handlebars'));

var locals = {
  name: "World"
};

handlebars.render('<h1>Hello {{name}}!</h1>', {}, locals).body
//=> '<h1>Hello World!</h1>'
```

## License

MIT
