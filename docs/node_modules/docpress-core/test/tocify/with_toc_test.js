'use strict'

const tocify = require('../../lib/tocify')

describe('tocify', function () {
  let files, output

  it('renders sub-toc\'s', function () {
    files = {
      'docs/install.md': { contents: '## Hi\n## There' }
    }

    output = tocify([
      '* [Install](/docs/install.md)'
    ].join('\n'), files)

    expect(output).toEqual({
      sections: [
        {
          title: 'Install',
          url: 'index.html',
          source: 'docs/install.md',
          slug: 'index',
          headings: [
            { id: 'hi', title: 'Hi', depth: 2 },
            { id: 'there', title: 'There', depth: 2 }
          ]
        }
      ]
    })
  })
})
