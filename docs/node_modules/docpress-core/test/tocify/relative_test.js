'use strict'

const tocify = require('../../lib/tocify')

describe('tocify: relative', function () {
  let output

  it('handles relative URLs', function () {
    output = tocify([
      '* [Readme](../README.md)',
      '* [Install](install.md)'
    ].join('\n'))

    expect(output).toEqual({
      sections: [
        {
          title: 'Readme',
          url: 'index.html',
          source: 'README.md',
          slug: 'index'
        },
        {
          title: 'Install',
          url: 'install.html',
          source: 'docs/install.md',
          slug: 'install'
        }
      ]
    })
  })

  it('handles extreme ../ in URLs', function () {
    output = tocify([
      '* [Readme](../docs/../README.md)',
      '* [Install](../docs/../docs/install.md)'
    ].join('\n'))

    expect(output).toEqual({
      sections: [
        {
          title: 'Readme',
          url: 'index.html',
          source: 'README.md',
          slug: 'index'
        },
        {
          title: 'Install',
          url: 'install.html',
          source: 'docs/install.md',
          slug: 'install'
        }
      ]
    })
  })
})
