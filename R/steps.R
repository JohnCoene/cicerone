#' Define Steps
#' 
#' Define cicerone steps.
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
#' @export
Cicerone <- R6::R6Class( # nolint
  "Cicerone",
#' @details
#' Create a new `Cicerone` object.
#' @param steps Array of steps to highlight. You should pass this when you want to setup a product tour.
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
#' @param keyboard_control Allow controlling through keyboard (escape 
#' to close, arrow keys to move).
#' @param id A unique identifier, useful if you are using more than one
#' cicerone.
#' @param mathjax Whether to use MathJax in the steps.
#' @param ... Other options to pass to the driver.js initialisation.
#' 
#' @return A Cicerone object.
  public = list(
    initialize = function(animate = TRUE,
                          overlay_opacity = .75,
                          padding = 10,
                          allow_close = TRUE,
                          done_btn_text = "Done",
                          stage_background = "#ffffff",
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
                          overlay_click_next = NULL,
                          close_btn_text = NULL,
                          opacity = NULL,
                          show_btns = NULL,
                          keyboard_control = NULL) {
      

      if(is.null(id))
        id <- generate_id()
      
      deprecated <-
        list(
          show_btns = list(val = show_btns, with = "Cicerone$new(show_buttons)"),
          overlay_click_next = list(val = overlay_click_next, with = NULL),
          close_btn_text = list(val = close_btn_text, with = NULL),
          opacity = list(val = opacity, with = "Cicerone$new(overlay_opacity)", details = "`overlay_opacity` has been provisionally replaced with the value supplied for `opacity` in this function call.", replace = "overlay_opacity"),
          keyboard_control = list(val = keyboard_control, with = "Cicerone$new(allow_keyboard_control)", details = "`allow_keyboard_control` has been provisionally replaced with the value supplied for `keyboard_control` in this function call.", replace = "allow_keyboard_control")
        )
      e <- environment()
      mapply(.x = deprecated, .y = names(deprecated), FUN = \(.x, .y) {
        if (!is.null(.x$val))
          lifecycle::deprecate_warn(
            when = ver_upgrade, 
            what = sprintf("Cicerone$new(%s)", .y),
            with = .x$with,
            details = .x$details,
            env = e,
            user_env = e)
        if (is.character(.x$replace))
          e[[.x$replace]] <- .x$val
      })
      
      private$globals <- list(
        animate = animate,
        overlayColor = overlay_color,
        smoothScroll = smooth_scroll,
        allowClose = allow_close,
        overlayOpacity = opacity,
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
        on_popover_render = on_popover_render,  # Placeholder for function
        on_highlight_started = on_highlight_started,  # Placeholder for function
        on_highlighted = on_highlighted,  # Placeholder for function
        on_deselected = on_deselected,  # Placeholder for function
        on_destroy_started = on_destroy_started,  # Placeholder for function
        on_destroyed = on_destroyed,  # Placeholder for function
        on_next_click = on_next_click,  # Placeholder for function
        on_prev_click = on_prev_click,  # Placeholder for function
        on_close_click = on_close_click  # Placeholder for function
      )

      private$id <- id
      private$mathjax <- mathjax

      invisible(self)
    },
#' @details
#' Add a step.
#' 
#' @param el Id of element to be highlighted.
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
#' @param tab_id The id of the tabs to activate in order to highlight `tab_id`.
#' @param is_id **Deprecated** Whether the selector passed to `el` is an HTML id, set to `FALSE` to use
#' other selectors, e.g.: `.class`. 
#' @param tab The name of the tab to set.
#' @param on_highlighted A JavaScript function to run when the step is highlighted,
#' generally a callback function. This is effectively a string that is evaluated JavaScript-side.
#' @param on_highlight_started A JavaScript function to run when the step is just aobut to be 
#' highlighted, generally a callback function. This is effectively a string that is evaluated JavaScript-side.
#' @param on_next A JavaScript function to run when the next button is clicked (or its event triggered), 
#' generally a callback function. This is effectively a string that is evaluated JavaScript-side.
    step = function(el, title = NULL, description = NULL, position = NULL, 
      class = NULL, show_btns = NULL, close_btn_text = NULL,
      next_btn_text = NULL, prev_btn_text = NULL, tab = NULL, tab_id = NULL, is_id = NULL,
      on_highlighted = NULL, on_highlight_started = NULL, on_next = NULL) {

      if(!is.null(is_id))
        .Deprecated(...)
      assertthat::assert_that(!missing(el), msg = "Must pass `el`")

      assertthat::assert_that(tabs_ok(tab, tab_id))

      
      el <- prep_element(el)

      popover <- list()

      if(!is.null(class)) popover$className <- as.character(class)
      if(!is.null(title)) popover$title <- as.character(title)
      if(!is.null(description)) popover$description <- as.character(description)
      if(!is.null(position)) popover$position <- position
      if(!is.null(show_btns)) popover$showButtons <- show_btns
      if(!is.null(close_btn_text)) popover$closeBtnText <- close_btn_text
      if(!is.null(next_btn_text)) popover$nextBtnText <- next_btn_text
      if(!is.null(prev_btn_text)) popover$prevBtnText <- prev_btn_text

      step = list(element = el, tab_id = tab_id, tab = tab)

      if(private$mathjax) {
        step$onHighlighted <- paste0("function(element){setTimeout(function(){
          MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
        }, 300);", on_highlighted, "}")
        
      } else {
        if(!is.null(on_highlighted)) step$onHighlighted <- on_highlighted
      }
      
      if(!is.null(on_highlight_started)) step$onHighlightStarted <- on_highlight_started
      if(!is.null(on_next)) step$onNext <- on_next

      if(length(popover)) step$popover <- popover

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
    init = function(session = NULL, run_once = FALSE){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      opts <- list(
        globals = private$globals,
        steps = private$steps,
        id = private$id
      )

      private$run_once <- run_once
      session$sendCustomMessage("cicerone-init", opts)
      invisible(self)
    },
#' @details
#' Reset Cicerone.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    reset = function(session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-reset", list(id = private$id))
      invisible(self)
    },
#' @details
#' Start Cicerone.
#' 
#' @param step The step index at which to start.
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    start = function(step = 1, session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()

      # we run it once and it already did
      if(private$run_once && private$runs > 0L)
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
    move_forward = function(session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-next", list(id = private$id))
      invisible(self)
    },
#' @details
#' Move Cicerone one step backward.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    move_backward = function(session = NULL){
      if(is.null(session))
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
    highlight = function(el, session = NULL){
      assertthat::assert_that(!missing(el), msg = "Must pass `el`.")
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      el <- prep_element(el)
        
      session$sendCustomMessage("cicerone-highlight", list(el = el, id = private$id))
      invisible(self)
    },
#' @details
#' Retrieve the id of the currently highlighted element.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_highlighted_el = function(session = NULL){
      .Deprecated("get_next", package = "cicerone", "Use the `get_next` or `get_previous`")
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-get-highlighted", list(el = el, id = private$id))
      grab <- paste0(private$id, "_highlighted_element")
      id <- session$input[[grab]]
      if(is.null(id))
        invisible(NULL)

      gsub("#", "", id)
    },
#' @details
#' Retrieve the id of the previously highlighted element.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_previous_el = function(session = NULL){
      .Deprecated("get_next", package = "cicerone", "Use the `get_next` or `get_previous`")
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-get-previous", list(el = el, id = private$id))
      grab <- paste0(private$id, "_previous_element")
      id <- session$input[[grab]]
      if(is.null(id))
        invisible(NULL)

      gsub("#", "", id)
    },
#' @details
#' Retrieve whether there is a next step.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    has_next_step = function(session = NULL){
      .Deprecated("get_next", package = "cicerone", "Use the `get_next` or `get_previous`")
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      session$sendCustomMessage("cicerone-has-next", list(el = el, id = private$id))
      grab <- paste0(private$id, "_has_next_step_man")
      id <- session$input[[grab]]
      if(is.null(id))
        invisible(NULL)

      gsub("#", "", id)
    },
#' @details Retrieve data that was fired when the user hit the "next" button.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_next = function(session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      grab <- paste0(private$id, "_cicerone_next")
      session$input[[grab]]
    },
#' @details Retrieve data that was fired when the user hit the "previous" button.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    get_previous = function(session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()

      grab <- paste0(private$id, "_cicerone_previous")
      session$input[[grab]]
    }
  ),
  private = list(
    steps = list(),
    globals = list(),
    id = NULL,
    runs = 0L,
    run_once = FALSE,
    mathjax = FALSE
  )
)
