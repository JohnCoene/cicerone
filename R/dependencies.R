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
#' 
#' @export
use_cicerone <- function() {
  shiny::singleton(
    shiny::tags$head(
      shiny::tags$link(
        href = "driver-assets/css/driver.min.css",
        rel= "stylesheet",
        type= "text/css"
      ),
      shiny::tags$link(
        href = "cicerone-assets/custom.css",
        rel = "stylesheet",
        type = "text/css"
      ),
      shiny::tags$script(
        src = "driver-assets/js/driver.min.js"
      ),
      shiny::tags$script(
        src = "cicerone-assets/cicerone.js"
      )
    )
  )
}
