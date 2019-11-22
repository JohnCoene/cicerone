
/**
 * scrollTop : scrollTop()
 * Returns the scroll top value.
 *
 *     var scrollTop = require('dom101/scroll-top');
 *     alert(scrollTop());
 */

function scrollTop () {
  if (window.pageYOffset) return window.pageYOffset;
  return document.documentElement.clientHeight
    ? document.documentElement.scrollTop
    : document.body.scrollTop;
}

// Taken from https://github.com/yields/scrolltop/blob/master/index.js
module.exports = scrollTop;
