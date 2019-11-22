const crypto = require('crypto')

module.exports = function hash (data) {
  const shasum = crypto.createHash('sha1')
  shasum.update(data)
  return shasum.digest('hex').substr(0, 8)
}
