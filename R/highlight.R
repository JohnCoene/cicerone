#' Highlight & Initialise
#' 
#' Initialise and highlight an element.
#' 
#' @param el The CSS selector for the element to be highlighted. Can also use `element`.
#' @param title Title shown in the popover. You can use HTML in this.
#' @param description Description shown in the popover. You can use HTML in this. Omit one of title or description to show only the other.
#' @param side The position of the popover relative to the target element. Possible values: "top", "right", "bottom", "left".
#' @param align The alignment of the popover relative to the target element. Possible values: "start", "center", "end".
#' @param show_buttons Array of buttons to show in the popover. Defaults to ["close"].
#' @param disable_buttons Array of buttons to disable.
#' @param done_btn_text Text to show in the done button.
#' @param next_btn_text Text to show in the next button.
#' @param prev_btn_text Text to show in the previous button.
#' @param show_progress Whether to show the progress text in popover.
#' @param progress_text Template for the progress text.
#' @param popover_class Custom class to add to the popover element.
#' @param element The CSS selector for the element to be highlighted. Can also use `el`.
#' @param animate Whether to animate the product tour. (default: true)
#' @param overlay_opacity Opacity of the backdrop. (default: 0.75)
#' @param stage_padding Distance between the highlighted element and the cutout. (default: 10)
#' @param allow_close Whether to allow closing the popover by clicking on the backdrop. (default: true)
#' @param allow_keyboard_control Whether to allow keyboard navigation. (default: true)
#' @param overlay_color Overlay color. (default: "black").
#' @param smooth_scroll Whether to smooth scroll to the highlighted element. (default: false)
#' @param stage_radius Radius of the cutout around the highlighted element. (default: 5)
#' @param disable_active_interaction Whether to disable interaction with the highlighted element. (default: false)
#' @param popover_offset Distance between the popover and the highlighted element. (default: 10)
#' @param on_popover_render Hook to run after the popover is rendered.
#' @param on_next_click Callback for next button click.
#' @param on_prev_click Callback for previous button click.
#' @param on_close_click Callback for close button click.
#' @param on_deselected Callback for when the current step is deselected.
#' @param on_highlighted A JavaScript function to run when the step is highlighted.
#' @param on_highlight_started A JavaScript function body to run when the step is just about to be highlighted.
#' @param on_destroy_started Hooks to run before destroying the driver. Each hook receives the following parameters: element: Currently active element, step: The step object configured for the currently active, options.config: The current configuration options, options.state: The current state of the driver
#' @param on_destroyed Hooks to run after destroying the driver. Each hook receives the following parameters: element: Currently active element, step: The step object configured for the currently active, options.config: The current configuration options, options.state: The current state of the driver
#' @param mathjax Whether to use MathJax in the steps.
#' @param padding **Deprecated** See `stage_padding`
#' @param position Where to position the popover.
#' See positions section.
#' @param stage_background **Deprecated** See `overlay_color`
#' @param overlay_click_next **Deprecated**
#' @param close_btn_text **Deprecated** 'Close' button is now an icon
#' @param opacity **Deprecated** See `overlay_opacity`
#' @param show_btns **Deprecated** See `show_buttons`
#' @param keyboard_control  **Deprecated** See `allow_keyboard_control`
#' @param class **Deprecated** See `popover_class`.
#' @param ... Other options to pass to the driver.js initialisation. Reserved for future use.
#' @param session A valid Shiny session if `NULL` 
#' the function attempts to get the session with 
#' [shiny::getDefaultReactiveDomain()].
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
    on_destroy_started = NULL,
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
