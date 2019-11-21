section <- function(...){
  div(
    class = "section container",
    ...
  )
}

read_code <- function(x){
  x <- readLines(x)
  paste(x, collapse = "\n")
}

srcCode <- function(...){
  tags$pre(
    tags$code(
      class = "language-r",
      ...
    )
  )
}

getStarted <- tags$a(
  class = "btn btn-default",
  href = "#intro",
  "Get Started"
)
