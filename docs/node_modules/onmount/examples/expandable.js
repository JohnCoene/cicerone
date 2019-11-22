/* global $ */
/* jshint expr: true */

/*
 * This is a kitchen-sink example that features most things you'd want to
 * happen in a typical component:
 *
 *  * keep a state
 *  * keep track of sub-elements
 *  * bind events
 *  * clean up when done
 *
 * <div class='js-expandable'>
 *   This is some content. It is long<span class='js-ellipsis'>...</span>
 *   <span class='js-content'>and some parts can be collapsed.</span>
 *
 *   <button class='js-toggle'>More</button>
 * </div>
 */

$.onmount('.js-expandable', function (b) {
  var $this = $(this)

  // cached element lookups.
  var $button = $('.js-toggle', this)
  var $content = $('.js-content', this)
  var $ellipsis = $('.js-ellipsis', this)

  // how we store state.
  var expanded = false

  // bind events via delegation.
  $this
    .on('click', $button, toggle)
    .on('click', $content, close)

  // bind a document event - this will need to be cleaned up later.
  $(document).on('click.js-expandable.' + b.id, close)

  // run on initialize.
  init()

  function init () {
    expanded = $this.hasClass('-expanded')
    expanded ? open() : close()
  }

  function close () {
    $this.removeClass('-expanded')
    $ellipsis.show()
    $content.slideUp()
    $button.html('More...')
    expanded = false
  }

  function open () {
    $this.addClass('-expanded')
    $ellipsis.hide()
    $content.slideDown()
    $button.html('Less')
    expanded = true
  }

  function toggle () {
    return expanded ? close() : open()
  }
}, function (b) {
  $(document).off('click.js-expandable.' + b.id)
})
