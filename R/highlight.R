#' Highlight & Initialise
#' 
#' Initialise and highlight an element.
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
#' @param session A valid Shiny session if \code{NULL} 
#' the function attempts to get the session with 
#' \link[shiny]{getDefaultReactiveDomain}.
#' 
#' @name highlight
#' @export
highlight <- function(el, title, description, position = "right", 
  class = "popover-class", show_btns = NULL, close_btn_text = NULL,
  next_btn_text = NULL, prev_btn_text = NULL, session = NULL) {

  if(is.null(session))
    session <- shiny::getDefaultReactiveDomain()
  
  assertthat::assert_that(!missing(el), !missing(title), !missing(description))

  el <- paste0("#", el)

  popover <- list(
    className = class,
    title = title,
    description = description,
    position = position
  )

  if(!is.null(show_btns)) popover$showButtons <- show_btns
  if(!is.null(close_btn_text)) popover$closeBtnText <- close_btn_text
  if(!is.null(next_btn_text)) popover$nextBtnText <- next_btn_text
  if(!is.null(prev_btn_text)) popover$prevBtnText <- prev_btn_text

  step = list(
    element = el,
    popover = popover
  )

  session$sendCustomMessage("cicerone-highlight-man", list(obj = step))

  invisible()
}

#' @rdname highlight
#' @export
initialise <- function(animate = TRUE, opacity = .75, padding = 10,
  allow_close = TRUE, overlay_click_next  = FALSE, done_btn_text = "Done",
  close_btn_text = "Close", stage_background = "#ffffff", next_btn_text = "Next",
  prev_btn_text = "Previous", show_btns = TRUE, keyboard_control = TRUE, session = NULL) {

  if(is.null(session))
    session <- shiny::getDefaultReactiveDomain()

  globals <- list(
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
    keyboardControl = keyboard_control
  )

  if(is.null(session))
    session <- shiny::getDefaultReactiveDomain()

  session$sendCustomMessage("cicerone-init", list(globals = globals))
  invisible()
}

#' @rdname highlight
#' @export
initialize <- initialise