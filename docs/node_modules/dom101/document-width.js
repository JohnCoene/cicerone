/**
 * documentWidth : documentWidth()
 * Returns the width of the document.
 * Compare with jQuery's `$(document).width()`.
 *
 *     var documentWidth = require('dom101/document-width');
 *
 *     var width = documentWidth();
 */

function documentWidth () {
  return Math.max(
    document.documentElement.clientWidth || 0,
    document.body.scrollWidth || 0,
    document.documentElement.scrollWidth || 0,
    document.body.offsetWidth || 0,
    document.documentElement.offsetWidth || 0);
}

module.exports = documentWidth;
