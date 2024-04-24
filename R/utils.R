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