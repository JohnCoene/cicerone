generate_id <- function() {
  paste0(sample(letters, 26), collapse = "")
}

prep_element <- function (el) {
  if (!grepl("(?:^\\.)|(?:^\\#)|<|>|\\[|\\s", el)) paste0("#", el) else el
}

`%||%` <- function(x, y) {
  if (is.null(x))
    y
  else x
}

