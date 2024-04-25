generate_id <- function() {
  paste0(sample(letters, 26), collapse = "")
}

prep_element <- function (el, el_as_is = FALSE) {
  if (!grepl("(?:^\\.)|(?:^\\#)|<|>|\\[|\\s", el) && !el_as_is) paste0("#", el) else el
}

`%||%` <- function(x, y) {
  if (is.null(x))
    y
  else x
}

#' extract variables from surrounding environment and convert to camelcase for passing to driver.js
#'

#' @inheritParams driver_configs
#' @return \code{list} named list of arguments specified by `nms`, named with lower camel case

driver_arg_list <- function(nms, e = rlang::caller_env(), compact = TRUE) {
  # Get all the variables from calling env
  out <- rlang::env_get_list(e, nms = nms, default = NULL)
  if (compact)
    out <- purrr::compact(out)
  # Convert names
  out <- rlang::set_names(out, snakecase::to_lower_camel_case(names(out)))
  return(out)
}

#' extract variables from surrounding environment and convert to camelcase for passing to driver.js
#' @param popover \code{NULL/lgl} A popover object to include. Will be imputed from environment `e`i f no provided unless `popover = FALSE`
#' @param nms \code{chr} Names to extract for `e`
#' @param e \code{env} with the variables specified by `nms`
#' @param compact \code{lgl} whether to \code{\link[purrr]{compact}} the resulting list
#' @return \code{list} named list of arguments corresponding to the driver.js object type with lower camel case for passing to the JS methods
#' @usage driver_configs$drive_step(environment())
#' driver_configs$config(environment())
#' driver_configs$popover(environment())


driver_configs <- list(
  popover = function(nms = c(
    "title",
    "description",
    "side",
    "align",
    "show_buttons",
    "disable_buttons",
    "next_btn_text",
    "prev_btn_text",
    "done_btn_text",
    "show_progress",
    "progress_text",
    "popover_class",
    "on_popover_render",
    "on_next_click",
    "on_prev_click",
    "on_close_click"
  ), e = rlang::caller_env(), compact = TRUE) {
    # Get all the variables for the popover object from the calling environment
    popover <- driver_arg_list(nms, e = e, compact = compact)
    return(popover)
  },
  drive_step = function(nms = c("element",
                                "on_deselected",
                                "on_highlighted",
                                "on_highlight_started"),
                        popover = NULL,
                        e = rlang::caller_env(), compact = TRUE) {
    ds <- driver_arg_list(nms, e = e, compact = compact)
    if (!isFALSE(popover)) {
      ds$popover <- driver_configs$popover(e = e, compact = compact)
    }
    return(ds)
  },
  config = function(
    nms = c(
      "animate",
      "overlay_color",
      "smooth_scroll",
      "allow_close",
      "overlay_opacity",
      "padding",
      "stage_radius",
      "keyboard_control",
      "disable_active_interaction",
      "popover_class",
      "popover_offset",
      "show_buttons",
      "disable_buttons",
      "show_progress",
      "progress_text",
      "next_btn_text",
      "prev_btn_text",
      "done_btn_text",
      "on_popover_render",
      "on_highlight_started",
      "on_highlighted",
      "on_deselected",
      "on_destroy_started",
      "on_destroyed",
      "on_next_click",
      "on_prev_click",
      "on_close_click"
    ),
    e = rlang::caller_env(), compact = TRUE) {
    o <- driver_arg_list(nms, e = e, compact = compact)
    return(o)
  }
)

mathjax <- function(on_highlighted, mathjax) {
  if (mathjax) {
    on_highlighted <- paste0(
      "setTimeout(function(){
          MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
        }, 300);\n",
      on_highlighted
    )
  }
  return(on_highlighted)
}

deprecate_replace <- function(deprecated, e = rlang::caller_env()) {
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
}