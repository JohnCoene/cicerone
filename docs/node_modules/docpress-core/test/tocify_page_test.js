'use strict'

const tocifyPage = require('../lib/tocify_page')

describe('tocifyPage(): with stuff', function () {
  let output

  beforeEach(function () {
    output = tocifyPage([
      '# Hello',
      '## Usage',
      '## Installation',
      '### via npm',
      '### via Bower',
      '## Thanks'
    ].join('\n') + '\n')
  })

  it('renders', function () {
    expect(output).toEqual([{
      title: 'Usage',
      depth: 2,
      id: 'usage'
    }, {
      title: 'Installation',
      depth: 2,
      id: 'installation',
      headings: [{
        title: 'via npm',
        depth: 3,
        id: 'via-npm'
      }, {
        title: 'via Bower',
        depth: 3,
        id: 'via-bower'
      }]
    }, {
      title: 'Thanks',
      depth: 2,
      id: 'thanks'
    }])
  })
})

describe('tocifyPage(): without stuff', function () {
  let output

  beforeEach(function () {
    output = tocifyPage('# hi')
  })

  it('renders titles', function () {
    expect(output).not.toBeDefined()
  })
})
