const readFileSync = require('fs').readFileSync
const join = require('path').join

module.exports = function useCache (fname, callback) {
  try {
    callback(null,
      readFileSync(join(__dirname, '..', '..', fname), 'utf-8'))
    return true
  } catch (e) {}
}
