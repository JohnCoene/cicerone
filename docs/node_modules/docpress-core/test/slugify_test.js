'use strict'

const slugify = require('../lib/slugify')

describe('slugify', function () {
  function test (input, output) {
    it(`${input} → ${output}`, function () {
      expect(slugify(input)).toEqual(output)
    })
  }

  test('', undefined)
  test('hi', 'hi')
  test('usage.html', 'usage')
  test('/foo/index.html', 'foo')
  test('index.html', 'index')
  test('page(callback)', 'pagecallback')
  test('page(path, callback[, callback ...])', 'pagepath-callback-callback-')
  test('context#save', 'contextsave')
  test('404 behavior', '404-behavior')
  test('IE8+', 'ie8')
  test('Hi (optional):', 'hi-optional')
  test('a  b  c', 'a-b-c')
})
