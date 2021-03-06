% Generated by roxygen2: do not edit by hand
% Please edit documentation in R/dependencies.R
\name{use_cicerone}
\alias{use_cicerone}
\title{Dependencies}
\usage{
use_cicerone()
}
\description{
Include cicerone dependencies in your Shiny UI.
}
\examples{
library(shiny)

ui <- fluidPage(
 use_cicerone()
)

server <- function(input, output){}

if(interactive()) shinyApp(ui, server)

}
