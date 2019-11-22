const stripMarkdown = require('../../lib/helpers/strip_markdown')

describe('strip markdown', function () {
  describe('simple cases', function () {
    test('hi', 'hi')
    test('`code`', 'code')
    test('_italic_', 'italic')
    test('(_italic_)', '(italic)')
    test('(_italic_)?', '(italic)?')
    test('*italic*', 'italic')
    test('**bold**', 'bold')
    test('with_underscores', 'with_underscores')
    test('[link](..)', 'link')
    test('[link][..]', 'link')
    test('![image](..)', 'image')
    test('![image][..]', 'image')
    test('with <b>html</b>', 'with html')
    test('[links]', 'links')
  })

  describe('nested cases', function () {
    test('**_bold italic_**', 'bold italic')
    test('**bold [link](.)**', 'bold link')
    test('[**bold link**](.)', 'bold link')
    test('[**bold link with `code`**](.)', 'bold link with code')
    test('[![link image](image.jpg)](x)', 'link image')
  })
})

function test (input, output) {
  it(`${input} → ${output}`, function () {
    expect(stripMarkdown(input)).toEqual(output)
  })
}
