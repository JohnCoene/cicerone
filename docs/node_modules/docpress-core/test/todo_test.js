describe('to do', function () {
  describe('done', function () {
    it('parsing toc', done)
    it('flattening toc to index', done)
    it('rendering pages', done)
    it('strip out docs/ prefix', done)
    it('test fail cases', done)
    it('prettifying pages', done)
    it('handle relative urls', done)
    it('validating toc', done)
    it('index sub-toc', done)
    it('expand mode', done) /* make it bold in the TOC */
    it('bug: linking pages inside sub-directories', done)
    it('bug: linking pages with absolute references', done)
    it('bug: linking to #anchors', done)
    it('bug: linking to #anchors in toc', done)
    it('link urls (http://...)', done)
    it('single readme mode', done)
    it('account for links in headings', done)
    it('account for question marks in headings', done)
  })

  describe('config', function () {
    it('load from docpress.json root', done)
    it('load from package.json', done)
    it('ignore docpress.json', done)
    it('override docs/', done)
  })

  describe('diff homepage', function () {
    it('allow linking of table of contents', done)
    it('custom homepage instead of readme.md', done)
  })

  describe('transforming html', function () {
    it('transforming links in document', done)
    it('syntax highlighting', done)
    it('set meta description')
  })

  describe('markdown', function () {
    it('allow plugins', done)
    it('allow setting markdown-it configuration', done)
    it('bundle markdown-it-decorate', done)
  })

  describe('to do', function () {
    it('warn when no pages are parsed')
    it('move loading plugins into docpress-core/ms')
    it('invalid non-md references should default to github')
    it('auto-infer of github URL (github-slug)')
  })
})

function done () {}
