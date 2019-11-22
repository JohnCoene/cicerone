'use strict'

const tocify = require('../../lib/tocify')

describe('tocify', function () {
  let output

  it('works', function () {
    output = tocify([
      '* [Readme](/README.md)'
    ].join('\n'))

    expect(output).toEqual({
      sections: [
        {
          title: 'Readme',
          url: 'index.html',
          source: 'README.md',
          slug: 'index'
        }
      ]
    })
  })

  it('handles non-links', function () {
    output = tocify([
      '* Readme'
    ].join('\n'))

    expect(output).toEqual({
      sections: [
        {
          title: 'Readme'
        }
      ]
    })
  })

  it('takes care of nesting', function () {
    output = tocify([
      '* [Readme](/README.md)',
      '* Getting Started',
      '  * [Install](/docs/install.md)',
      '  * [Usage](/docs/usage.md)'
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
          title: 'Getting Started',
          sections: [
            {
              title: 'Install',
              url: 'install.html',
              source: 'docs/install.md',
              slug: 'install'
            },
            {
              title: 'Usage',
              url: 'usage.html',
              source: 'docs/usage.md',
              slug: 'usage'
            }
          ]
        }
      ]
    })
  })

  it('takes care of nesting', function () {
    output = tocify([
      '* [Readme](/README.md)',
      '* Getting Started',
      '  * [Install](/docs/install.md)',
      '  * [Usage](/docs/usage.md)'
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
          title: 'Getting Started',
          sections: [
            {
              title: 'Install',
              url: 'install.html',
              source: 'docs/install.md',
              slug: 'install'
            },
            {
              title: 'Usage',
              url: 'usage.html',
              source: 'docs/usage.md',
              slug: 'usage'
            }
          ]
        }
      ]
    })
  })

  it('handles expand', function () {
    output = tocify([
      '* **[Readme](/README.md)**'
    ].join('\n'))

    expect(output).toEqual({
      sections: [
        {
          title: 'Readme',
          url: 'index.html',
          source: 'README.md',
          slug: 'index',
          expand: true
        }
      ]
    })
  })
})
