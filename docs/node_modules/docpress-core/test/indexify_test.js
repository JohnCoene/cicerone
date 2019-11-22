const indexify = require('../lib/indexify')

describe('indexify', function () {
  const toc = {
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
  }

  it('index works', function () {
    const res = indexify(toc)
    expect(res.index).toEqual({
      'install.html': {
        source: 'docs/install.md', title: 'Install - Readme', pageTitle: 'Install', slug: 'install'
      },
      'usage.html': {
        source: 'docs/usage.md', title: 'Usage - Readme', pageTitle: 'Usage', slug: 'usage'
      },
      'index.html': {
        source: 'README.md', title: 'Readme', pageTitle: 'Readme', slug: 'index'
      }
    })
  })

  it('sources works', function () {
    const res = indexify(toc)
    expect(res.sources).toEqual({
      'docs/install.md': 'install.html',
      'docs/usage.md': 'usage.html',
      'README.md': 'index.html'
    })
  })
})
