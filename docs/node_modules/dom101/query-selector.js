/**
 * querySelector : querySelector(query)
 * Convenience function to access `document.querySelector`.
 *
 *     var q = require('dom101/query-selector');
 *     addClass(q('#instructions'), 'hidden');
 */

function querySelector (query) {
  return document.querySelector(query);
}

module.exports = querySelector;
