#' Highlight & Initialise
#' 
#' Initialise and highlight an element.
#' 
#' @param el Id of element to be highlighted.
#' @param id Unique identifier of cicerone.
#' @param title Title on the popover.
#' @param description Body of the popover.
#' @param position Where to position the popover. 
#' See positions section.
#' @param class className to wrap this specific step 
#' popover in addition to the general className in Driver 
#' options.
#' @param show_btns Whether to show control buttons.
#' @param close_btn_text Text on the close button.
#' @param next_btn_text Next button text.
#' @param prev_btn_text Previous button text.
#' @param animate Whether to animate or not.
#' @param opacity Background opacity (0 means only popovers 
#' and without overlay).
#' @param padding Distance of element from around the edges.
#' @param allow_close Whether the click on overlay should close 
#' or not.
#' @param overlay_click_next Whether the click on overlay should 
#' move next.
#' @param done_btn_text Text on the final button.
#' @param close_btn_text Text on the close button for this step.
#' @param stage_background Background color for the staged behind 
#' highlighted element.
#' @param next_btn_text Next button text for this step.
#' @param prev_btn_text Previous button text for this step.
#' @param show_btns Do not show control buttons in footer.
#' @param keyboard_control Allow controlling through keyboard (escape 
#' to close, arrow keys to move).
#' @param session A valid Shiny session if `NULL` 
#' the function attempts to get the session with 
#' [shiny::getDefaultReactiveDomain()].
#' 
#' @section Position:
#' * left
#' * right
#' * left-center
#' * left-bottom
#' * top
#' * top-center
#' * top-right
#' * right
#' * right-center
#' * right-bottom
#' * bottom
#' * bottom-center
#' * mid-center
#' 
#' @name highlight
#' @export
highlight <- function(
    el = NULL,
    title = NULL,
    description = NULL,
    side = NULL,
    align = NULL,
    show_buttons = c("close"),
    disable_buttons = NULL,
    done_btn_text = "Done",
    next_btn_text = "Next",
    prev_btn_text = "Previous",
    show_progress = FALSE,
    progress_text = NULL,
    popover_class = NULL,
    element = NULL,
    animate = TRUE,
    overlay_opacity = .75,
    stage_padding = 10,
    allow_close = TRUE,
    allow_keyboard_control = TRUE,
    overlay_color = "black",
    smooth_scroll = FALSE,
    stage_radius = 5,
    disable_active_interaction = FALSE,
    popover_offset = 10,
    on_popover_render = NULL,
    on_next_click = NULL,
    on_prev_click = NULL,
    on_close_click = NULL,
    on_deselected = NULL,
    on_highlighted = NULL,
    on_highlight_started = NULL,
    # Placeholder for function
    on_destroy_started = NULL,
    # Placeholder for function
    on_destroyed = NULL,
    mathjax = FALSE,
    padding = NULL,
    position = NULL,
    stage_background = NULL,
    overlay_click_next = NULL,
    close_btn_text = NULL,
    opacity = NULL,
    show_btns = NULL,
    keyboard_control = NULL,
    class = NULL,
    ...,
    session = shiny::getDefaultReactiveDomain()) {
  element <- el %||% element
  deprecate_replace(
    list(
      show_btns = list(val = show_btns, with = "Cicerone$new(show_buttons)"),
      overlay_click_next = list(val = overlay_click_next, with = NULL),
      close_btn_text = list(val = close_btn_text, details = "Close button is now an icon."),
      opacity = list(
        val = opacity,
        with = "Cicerone$new(overlay_opacity)",
        details = "`overlay_opacity` has been provisionally replaced with the value supplied for `opacity` in this function call.",
        replace = "overlay_opacity"
      ),
      keyboard_control = list(
        val = keyboard_control,
        with = "Cicerone$new(allow_keyboard_control)",
        details = "`allow_keyboard_control` has been provisionally replaced with the value supplied for `keyboard_control` in this function call.",
        replace = "allow_keyboard_control"
      ),
      stage_background = list(
        val = stage_background,
        with = "Cicerone$new(stage_background)",
        details = "`overlay_color` has been provisionally replaced with the value supplied for `stage_background` in this function call.",
        replace = "overlay_color"
      ),
      padding = list(
        val = padding,
        with = "Cicerone$new(padding)",
        details = "`stage_padding` has been provisionally replaced with the value supplied for `padding` in this function call.",
        replace = "stage_padding"
      ),
      class = list(
        val = class,
        with = "Cicerone$step(class)",
        details = "`popover_class` has been provisionally replaced with the value supplied for `class` in this function call.",
        replace = "popover_class"
      ),
      position = list(
        val = position,
        with = "Cicerone$step(position)",
        details = "See `side` and `align`"
      )
    )
  )

  
  el <- prep_element(element)
  
  if (mathjax) {
    on_highlighted <- paste0(
      "setTimeout(function(){
          MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
        }, 300);\n",
      on_highlighted
    )
  }
  
  
  highlight <- purrr::compact(list(
    config = purrr::compact(list(
      animate = animate,
      overlayColor = overlay_color,
      smoothScroll = smooth_scroll,
      allowClose = allow_close,
      overlayOpacity = overlay_opacity,
      stagePadding = padding,
      stageRadius = stage_radius,
      allowKeyboardControl = keyboard_control,
      disableActiveInteraction = disable_active_interaction,
      popoverClass = popover_class,
      popoverOffset = popover_offset,
      showButtons = show_buttons,
      disableButtons = disable_buttons,
      showProgress = show_progress,
      progressText = progress_text,
      nextBtnText = next_btn_text,
      prevBtnText = prev_btn_text,
      doneBtnText = done_btn_text,
      onPopoverRender = on_popover_render,
      # Placeholder for function
      onHighlightStarted = on_highlight_started,
      # Placeholder for function
      onHighlighted = on_highlighted,
      # Placeholder for function
      onDeselected = on_deselected,
      # Placeholder for function
      onDestroyStarted = on_destroy_started,
      # Placeholder for function
      onDestroyed = on_destroyed,
      # Placeholder for function
      onNextClick = on_next_click,
      # Placeholder for function
      onPrevClick = on_prev_click,
      # Placeholder for function
      onCloseClick = on_close_click,
      # Placeholder for function
      ...
    )),
    highlight = list(
      element = element,
      popover = purrr::compact(
        list(
          title = title,
          description = description,
          side = side,
          align = align,
          showButtons = show_buttons,
          disableButtons = disable_buttons,
          nextBtnText = next_btn_text,
          prevBtnText = prev_btn_text,
          doneBtnText = done_btn_text,
          showProgress = show_progress,
          progressText = progress_text,
          popoverClass = popover_class,
          onPopoverRender = on_popover_render,
          onNextClick = on_next_click,
          onPrevClick = on_prev_click,
          onCloseClick = on_close_click
        )
      ),
      onDeselected = on_deselected,
      onHighlighted = on_highlighted,
      onHighlightStarted = on_highlight_started
    )
  ))

  session$sendCustomMessage("cicerone-highlight", highlight)

  invisible()
}

#' @rdname highlight
#' @export
initialise <- highlight
