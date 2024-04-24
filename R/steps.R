#' Define the Cicerone Driver
#'
#'
#' @section New in 2.0.0:
#' The arguments have been updated to be the snake_case equivalents of the arguments in the [driver.js 1.3.1 documentation](https://driverjs.com/docs/configuration) to provide parity and ease of navigating the functionality of driver.js. See [Migrate to 1.x](https://driverjs.com/docs/migrating-from-0x) for documentation of changes.
#'
#' @section Callbacks:
#' All arguments beginning with `on...` allow for the declaration of a Javascript callback function body.
#' The function body can use the following parameters:
#'   - element: The current DOM element of the step
#'   - step: The step object configured for the step
#'   - options.config: The current configuration options
#'   - options.state: The current state of the driver
#'
#' @export
Cicerone <- R6::R6Class(
  # nolint
  "Cicerone",
  #' @details
  #' Create a new `Cicerone` object.
  #' @param animate Whether to animate the product tour. (default: true)
  #' @param overlay_color Overlay color. (default: black). This is useful when you have a dark background and want to highlight elements with a light background color.
  #' @param smooth_scroll Whether to smooth scroll to the highlighted element. (default: false)
  #' @param allow_close Whether to allow closing the popover by clicking on the backdrop. (default: true)
  #' @param overlay_opacity Opacity of the backdrop. (default: 0.5)
  #' @param stage_padding Distance between the highlighted element and the cutout. (default: 10)
  #' @param stage_radius Radius of the cutout around the highlighted element. (default: 5)
  #' @param allow_keyboard_control Whether to allow keyboard navigation. (default: true)
  #' @param disable_active_interaction Whether to disable interaction with the highlighted element. (default: false)
  #' @param popover_class If you want to add custom class to the popover
  #' @param popover_offset Distance between the popover and the highlighted element. (default: 10)
  #' @param show_buttons Array of buttons to show in the popover. Defaults to ["next", "previous", "close"] for product tours and [] for single element highlighting.
  #' @param disable_buttons Array of buttons to disable. This is useful when you want to show some of the buttons, but disable some of them.
  #' @param show_progress Whether to show the progress text in popover. (default: false)
  #' @param progress_text Template for the progress text. You can use the following placeholders in the template: {{current}}: The current step number, {{total}}: Total number of steps
  #' @param next_btn_text Text to show in the next button.
  #' @param prev_btn_text Text to show in the previous button.
  #' @param done_btn_text Text to show in the done button. `doneBtnText` is used on the last step of a tour.
  #' @param on_popover_render Called after the popover is rendered. PopoverDOM is an object with references to the popover DOM elements such as buttons title, descriptions, body, container etc.
  #' @param on_highlight_started Hooks to run before highlighting each step. Each hook receives the following parameters: element: The target DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_highlighted Hooks to run after highlighting each step. Each hook receives the following parameters: element: The target DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_deselected Hooks to run after deselecting each step. Each hook receives the following parameters: element: The target DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_destroy_started Hooks to run before destroying the driver. Each hook receives the following parameters: element: Currently active element, step: The step object configured for the currently active, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_destroyed Hooks to run after destroying the driver. Each hook receives the following parameters: element: Currently active element, step: The step object configured for the currently active, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_next_click Hooks to run on next button click. Each hook receives the following parameters: element: The current DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_prev_click Hooks to run on previous button click. Each hook receives the following parameters: element: The current DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param on_close_click Hooks to run on close button click. Each hook receives the following parameters: element: The current DOM element of the step, step: The step object configured for the step, options.config: The current configuration options, options.state: The current state of the driver
  #' @param id A unique identifier, useful if you are using more than one
  #' cicerone.
  #' @param keyboard_control  **Deprecated** See `allow_keyboard_control`
  #' @param mathjax Whether to use MathJax in the steps.
  #' @param padding **Deprecated** See `stage_padding`
  #' @param stage_background **Deprecated** See `overlay_color`
  #' @param overlay_click_next **Deprecated**
  #' @param close_btn_text **Deprecated** 'Close' button is now an icon
  #' @param opacity **Deprecated** See `overlay_opacity`
  #' @param show_btns **Deprecated** See `show_buttons`
  #' @param ... Other options to pass to the driver.js initialisation. Reserved for future use.
  #'
  #' @return A Cicerone object.
  public = list(
    initialize = function(animate = TRUE,
                          overlay_opacity = .75,
                          stage_padding = 10,
                          allow_close = TRUE,
                          done_btn_text = "Done",
                          next_btn_text = "Next",
                          prev_btn_text = "Previous",
                          allow_keyboard_control = TRUE,
                          overlay_color = "black",
                          smooth_scroll = FALSE,
                          stage_radius = 5,
                          disable_active_interaction = FALSE,
                          popover_class = NULL,
                          popover_offset = 10,
                          show_buttons = c("next", "previous", "close"),
                          disable_buttons = NULL,
                          show_progress = FALSE,
                          progress_text = NULL,
                          on_popover_render = NULL,
                          # Placeholder for function
                          on_highlight_started = NULL,
                          # Placeholder for function
                          on_highlighted = NULL,
                          # Placeholder for function
                          on_deselected = NULL,
                          # Placeholder for function
                          on_destroy_started = NULL,
                          # Placeholder for function
                          on_destroyed = NULL,
                          # Placeholder for function
                          on_next_click = NULL,
                          # Placeholder for function
                          on_prev_click = NULL,
                          # Placeholder for function
                          on_close_click = NULL,
                          # Placeholder for function
                          id = NULL,
                          mathjax = FALSE,
                          padding = NULL,
                          stage_background = NULL,
                          overlay_click_next = NULL,
                          close_btn_text = NULL,
                          opacity = NULL,
                          show_btns = NULL,
                          keyboard_control = NULL,
                          ...) {
      if (is.null(id))
        id <- generate_id()
      
      
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
          )
        )
      )
      
      private$config <- purrr::compact(list(
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
      ))
      
      private$id <- id
      private$mathjax <- mathjax
      
      invisible(self)
    },
    #' @details
    #' Add a step.
    #' @param el The CSS selector for the element to be highlighted. Can also use `element`.
    #' @param element The CSS selector for the element to be highlighted. Can also use `el`.
    #' @param title Title shown in the popover. You can use HTML in this.
    #' @param description Description shown in the popover. You can use HTML in this. Omit one of title or description to show only the other.
    #' @param side The position of the popover relative to the target element. Possible values: "top", "right", "bottom", "left".
    #' @param align The alignment of the popover relative to the target element. Possible values: "start", "center", "end".
    #' @param show_buttons Array of buttons to show in the popover. Defaults to ["next", "previous", "close"] for tours and empty array for single element highlighting.
    #' @param disable_buttons Array of buttons to disable.
    #' @param next_btn_text Text to show in the next button.
    #' @param prev_btn_text Text to show in the previous button.
    #' @param done_btn_text Text to show in the done button.
    #' @param show_progress Whether to show the progress text in popover.
    #' @param progress_text Template for the progress text. You can use the following placeholders in the template: {{current}}: The current step number, {{total}}: Total number of steps. Defaults to "{{current}} of {{total}}" if show_progress is true.
    #' @param popover_class Custom class to add to the popover element.
    #' @param on_popover_render Hook to run after the popover is rendered. You can modify the popover element here. Parameter is an object with references to the popover DOM elements such as buttons, title, descriptions, body, etc.
    #' @param on_next_click Callback for next button click. See `Callbacks`.
    #' @param on_prev_click Callback for previous button click. See `Callbacks`.
    #' @param on_close_click Callback for close button click. See `Callbacks`.
    #' @param on_deselected Callback for when the current step is deselected. See `Callbacks`.
    #' @param on_highlighted A JavaScript function to run when the step is highlighted,
    #' generally a callback function. This is effectively a string that is evaluated JavaScript-side. See `Callbacks`.
    #' @param on_highlight_started A JavaScript function body to run when the step is just about to be
    #' highlighted, generally a callback function. This is effectively a string that is evaluated JavaScript-side. See `Callbacks`.
    #' @param position Where to position the popover.
    #' See positions section.
    #' @param class **Deprecated** See `popover_class`.
    #' @param show_btns **Deprecated** Whether to show control buttons. See `show_buttons`.
    #' @param close_btn_text **Deprecated** Close button is now an icon.
    #' @param tab_id **Deprecated** The id of the tabs to activate in order to highlight `tab_id`.
    #' @param is_id **Deprecated** Whether the selector passed to `el` is an HTML id, set to `FALSE` to use.
    #' other selectors, e.g.: `.class`.
    #' @param tab **Deprecated** The name of the tab to set.
    #' @param on_next  **Deprecated** A JavaScript function to run when the next button is clicked (or its event triggered),
    #' generally a callback function. This is effectively a string that is evaluated JavaScript-side.
    step = function(el = NULL,
                    title = NULL,
                    description = NULL,
                    side = NULL,
                    align = NULL,
                    show_buttons = NULL,
                    disable_buttons = NULL,
                    next_btn_text = NULL,
                    prev_btn_text = NULL,
                    done_btn_text = NULL,
                    show_progress = NULL,
                    progress_text = NULL,
                    popover_class = NULL,
                    on_popover_render = NULL,
                    on_next_click = NULL,
                    on_prev_click = NULL,
                    on_close_click = NULL,
                    on_deselected = NULL,
                    on_highlighted = NULL,
                    on_highlight_started = NULL,
                    element = NULL,
                    class = NULL,
                    show_btns = NULL,
                    close_btn_text = NULL,
                    tab = NULL,
                    tab_id = NULL,
                    is_id = NULL,
                    position = NULL,
                    on_next = NULL) {
      element <- el %||% element
      deprecate_replace(
        list(
          class = list(
            val = class,
            with = "Cicerone$step(class)",
            details = "`popover_class` has been provisionally replaced with the value supplied for `class` in this function call.",
            replace = "popover_class"
          ),
          show_btns = list(val = show_btns, with = "Cicerone$step(show_buttons)"),
          tab_id = list(val = tab_id, details = "Use `el` instead."),
          tab = list(val = tab, details = "Use `el` instead."),
          is_id = list(val = is_id),
          close_btn_text = list(val = close_btn_text, details = "Close button is now an icon."),
          position = list(
            val = position,
            with = "Cicerone$step(position)",
            details = "See `side` and `align`"
          ),
          on_next = list(val = on_next, details = "See `on_next_click`.")
        )
      )
      
      if (!is.null(is_id))
        .Deprecated(...)
      
      assertthat::assert_that(tabs_ok(tab, tab_id))
      
      
      
      el <- prep_element(element)
      
      if (private$mathjax) {
        on_highlighted <- paste0(
          "setTimeout(function(){
          MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
        }, 300);\n",
        on_highlighted
        )
      }
      
      step <- purrr::compact(list(
        element = element,
        popover = purrr::compact(list(
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
        )),
        onDeselected = on_deselected,
        onHighlighted = on_highlighted,
        onHighlightStarted = on_highlight_started
      ))
      private$steps <- append(private$steps, list(step))
      invisible(self)
    },
    #' @details
    #' Initialise Cicerone.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    #' @param run_once Whether to only run the guide once. If `TRUE`
    #' any subsequent calls of the method will not run the guide.
    init = function(session = NULL, run_once = FALSE) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      private$config$steps <- private$steps
      opts <- list(config = private$config,
                   id = private$id)
      
      private$run_once <- run_once
      session$sendCustomMessage("cicerone-init", opts)
      invisible(self)
    },
    #' @details
    #' Start Cicerone.
    #'
    #' @param step The step index at which to start.
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    start = function(step = 1, session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      # we run it once and it already did
      if (private$run_once && private$runs > 0L)
        return(invisible(self))
      
      private$runs <- private$runs + 1L
      step <- step - 1
      session$sendCustomMessage("cicerone-start", list(step = step, id = private$id))
      
      invisible(self)
    },
    #' @details
    #' Start Cicerone.
    #'
    #' @param step The step index at which to start.
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    drive = function(step = 1, session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      # we run it once and it already did
      if (private$run_once && private$runs > 0L)
        return(invisible(self))
      
      private$runs <- private$runs + 1L
      step <- step - 1
      session$sendCustomMessage("cicerone-start", list(step = step, id = private$id))
      
      invisible(self)
    },
    #' @details
    #' Move Cicerone one step.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    move_forward = function(session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-next", list(id = private$id))
      invisible(self)
    },
    #' @details
    #' Move Cicerone one step backward.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    move_backward = function(session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-previous", list(id = private$id))
      invisible(self)
    },
    #' @details
    #' Highlight a specific step.
    #'
    #' @param el Id of element to highlight
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    highlight = function(el, session = NULL) {
      assertthat::assert_that(!missing(el), msg = "Must pass `el`.")
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      el <- prep_element(el)
      
      session$sendCustomMessage("cicerone-highlight", list(el = el, id = private$id))
      invisible(self)
    },
    #' @details Retrieve data that was fired when the user hit the "next" button.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_next = function(session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      grab <- paste0(private$id, "_cicerone_next")
      session$input[[grab]]
    },
    #' @details Retrieve data that was fired when the user hit the "previous" button.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_previous = function(session = NULL) {
      if (is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      grab <- paste0(private$id, "_cicerone_previous")
      session$input[[grab]]
    },
    #' @details
    #' Reset Cicerone.
    #' @param id \code{chr} the ID of the guide to reset. Uses the current guide by default.
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    reset = function(id, session = NULL) {
      session$sendCustomMessage("cicerone-reset", id = private$id)
    },
    # Deprecated ----
    # Tue Apr 23 11:56:43 2024
    #' @details
    #' Retrieve the id of the currently highlighted element.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_highlighted_el = function(session = NULL) {
      .Deprecated("get_next", package = "cicerone", "Use `get_next` or `get_previous`")
    },
    #' @details
    #' Retrieve the id of the previously highlighted element.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_previous_el = function(session = NULL) {
      .Deprecated("get_next", package = "cicerone", "Use the `get_next` or `get_previous`")
    },
    #' @details
    #' Retrieve whether there is a next step.
    #'
    #' @param session A valid Shiny session if `NULL` the function
    #' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    has_next_step = function(session = NULL) {
      .Deprecated("get_next", package = "cicerone", "Use the `get_next` or `get_previous`")
    }
  ),
  # Private ----
  # Tue Apr 23 11:56:50 2024
  private = list(
    steps = list(),
    config = list(),
    id = NULL,
    runs = 0L,
    run_once = FALSE,
    mathjax = FALSE
  )
)
