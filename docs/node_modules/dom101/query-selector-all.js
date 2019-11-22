/**
 * querySelectorAll : querySelectorAll(query)
 * Convenience function to access `document.querySelectorAll`.
 *
 *     var each = require('dom101/each');
 *     var qa = require('dom101/query-selector-all');
 *
 *     each(qa('.button'), function (el) {
 *       addClass('el', 'selected');
 *     });
 */

function querySelectorAll (query) {
  return document.querySelectorAll(query);
}

module.exports = querySelectorAll;
