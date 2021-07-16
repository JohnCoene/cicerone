#' Dependencies
#' 
#' Include cicerone dependencies in your Shiny UI.
#' 
#' @examples 
#' library(shiny)
#' 
#' ui <- fluidPage(
#'  use_cicerone()
#' )
#' 
#' server <- function(input, output){}
#' 
#' if(interactive()) shinyApp(ui, server)
#' 
#' @import assertthat
#' @importFrom htmltools htmlDependency
#' 
#' @export
use_cicerone <- function() {
  htmlDependency(
    "cicerone",
    version = utils::packageVersion("cicerone"),
    package = "cicerone",
    src = "packer",
    script = "cicerone.js"
  )
}
