'use strict'

const Handlebars = require('handlebars')

exports.name = 'handlebars'
exports.inputFormats = ['hbs', 'handlebars']
exports.outputFormat = 'html'
exports.handlebars = Handlebars

exports.compile = function (str, options) {
  options = options || {}
  for (const partial in options.partials || {}) {
    if ({}.hasOwnProperty.call(options.partials, partial)) {
      Handlebars.registerPartial(partial, options.partials[partial])
    }
  }
  for (const helper in options.helpers || {}) {
    if ({}.hasOwnProperty.call(options.helpers, helper)) {
      Handlebars.registerHelper(helper, options.helpers[helper])
    }
  }
  for (const decorator in options.decorators || {}) {
    if ({}.hasOwnProperty.call(options.decorators, decorator)) {
      Handlebars.registerDecorator(decorator, options.decorator[decorator])
    }
  }
  return Handlebars.compile(str, options)
}
