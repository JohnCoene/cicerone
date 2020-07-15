tabs_ok <- function(x, y) {
  total <- sum(length(x), length(y))

  total != 1
}

on_failure(tabs_ok) <- function(call, env) {
  paste0("Either do not define either", deparse(call$x), " and ", deparse(call$y), "or define both.")
}