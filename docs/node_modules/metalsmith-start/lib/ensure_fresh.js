/*
 * connect middleware to suppress '304 Not Modified' statuses.  this ensures
 * that data will always be returned and connect-livereload has a chance to
 * inject its scripts.
 */

module.exports = function (req, res, next) {
  if (req.headers['accept'] && ~req.headers['accept'].indexOf('text/html')) {
    delete req.headers['if-none-match']
    delete req.headers['if-modified-since']
  }
  next()
}
