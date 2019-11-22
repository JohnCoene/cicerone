/**
 * documentHeight : documentHeight()
 * Returns the height of the document.
 * Compare with jQuery's `$(document).height()`.
 *
 *     var documentHeight = require('dom101/document-height');
 *
 *     var height = documentHeight();
 */

function documentHeight () {
  return Math.max(
    document.documentElement.clientHeight || 0,
    document.body.scrollHeight || 0,
    document.documentElement.scrollHeight || 0,
    document.body.offsetHeight || 0,
    document.documentElement.offsetHeight || 0);
}

module.exports = documentHeight;
