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
Cicerone <- R6::R6Class(
  "Cicerone",
#' @details
#' Create a new `Cicerone` object.
#' 
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
#' @param id A unique identifier, useful if you are using more than one
#' cicerone.
#' 
#' @return A Cicerone object.
  public = list(
    initialize = function(animate = TRUE, opacity = .75, padding = 10,
      allow_close = TRUE, overlay_click_next  = FALSE, done_btn_text = "Done",
      close_btn_text = "Close", stage_background = "#ffffff", next_btn_text = "Next",
      prev_btn_text = "Previous", show_btns = TRUE, keyboard_control = TRUE, id = NULL) {

      if(is.null(id))
        id <- generate_id()

      private$globals <- list(
        animate = animate,
        opacity = opacity,
        padding = padding,
        allowClose = allow_close,
        overlayClickNext = overlay_click_next,
        doneBtnText = done_btn_text,
        closeBtnText = close_btn_text,
        stageBackground = stage_background,
        nextBtnText = next_btn_text,
        prevBtnText = prev_btn_text,
        showButtons = show_btns,
        keyboardControl = keyboard_control,
        id = id
      )

      private$id <- id

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
#' @param tab The name of the tab to set.
#' @param is_id Whether the selector passed to `el` is an HTML id, set to `FALSE` to use
#' other selectors, e.g.: `.class`.
    step = function(el, title = NULL, description = NULL, position = NULL, 
      class = NULL, show_btns = NULL, close_btn_text = NULL,
      next_btn_text = NULL, prev_btn_text = NULL, tab = NULL, tab_id = NULL, is_id = TRUE) {

      assertthat::assert_that(!missing(el), msg = "Must pass `el`.")

      assertthat::assert_that(tabs_ok(tab, tab_id))

      if(is_id)
        el <- paste0("#", el)

      popover <- list()

      if(!is.null(class)) popover$className <- class
      if(!is.null(title)) popover$title <- title
      if(!is.null(description)) popover$description <- description
      if(!is.null(position)) popover$position <- position
      if(!is.null(show_btns)) popover$showButtons <- show_btns
      if(!is.null(close_btn_text)) popover$closeBtnText <- close_btn_text
      if(!is.null(next_btn_text)) popover$nextBtnText <- next_btn_text
      if(!is.null(prev_btn_text)) popover$prevBtnText <- prev_btn_text

      step = list(element = el, tab_id = tab_id, tab = tab)

      if(length(popover)) step$popover <- popover

      private$steps <- append(private$steps, list(step))
      invisible(self)
    },
#' @details
#' Initialise Cicerone.
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    init = function(session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      opts <- list(
        globals = private$globals,
        steps = private$steps,
        id = private$id
      )

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
#' 
#' @param session A valid Shiny session if `NULL` the function
#' attempts to get the session with [shiny::getDefaultReactiveDomain()].
    start = function(step = 1, session = NULL){
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
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
#' @param is_id Whether the selector passed to `el` is an HTML id, set to `FALSE` to use
#' other selectors, e.g.: `.class`.
    highlight = function(el, session = NULL, is_id = TRUE){
      assertthat::assert_that(!missing(el), msg = "Must pass `el`.")
      if(is.null(session))
        session <- shiny::getDefaultReactiveDomain()
      
      if(is_id)
        el <- paste0("#", el)
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
    id = NULL
  )
)