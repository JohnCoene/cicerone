'use strict'

/**
 * Checks if the source is a valid external URL
 * @param  {string} source
 * @return {boolean}
 */
module.exports = source => /^https?:\/\//.test(source)
