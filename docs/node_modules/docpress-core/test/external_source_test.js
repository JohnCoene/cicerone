const externalSource = require('../lib/external_source')

describe('externalSource', function () {
  it('returns true for URLs', function () {
    [
      'http://www.website.com',
      'https://website.org.uk'
    ].forEach(source => expect(externalSource(source)).toEqual(true))
  })
  it('returns false for local files', function () {
    [
      './directory/file.md',
      './directory/page.html',
      'directory/image.jpg',
      'file',
      'http-file',
      'https/directory'
    ].forEach(source => expect(externalSource(source)).toEqual(false))
  })
})
