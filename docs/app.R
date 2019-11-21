library(shiny)
library(cicerone)

shiny::addResourcePath("assets", "./assets")

source("./global.R")

basic <- read_code("./guides/basic.R")

ui <- fluidPage(
  tags$head(
    tags$link(
      href = "./assets/css/prism.css",
      rel = "stylesheet"
    ),
    tags$script(
      src = "./assets/js/prism.js"
    ),
    tags$link(
      href = "./assets/css/style.css",
      rel = "stylesheet"
    )
  ),
  section(
    id = "home",
    div(
      class = "center",
      h1("cicerone"),
      tags$a(
        class = "btn btn-default",
        href = "#install",
        "Install"
      ),
      getStarted
    )
  ),
  section(
    id = "install",
    h3("Installation"),
    p(
      "You can install the package from Github with either remotes or devtools.",
      "Install one of the aforementioned packages first."
    ),
srcCode('install.packages("remotes")'),
    p("Then install Cicerone"),
srcCode('remotes::install_github("JohnCoene/cicerone")'),
    getStarted
  ),
  section(
    id = "intro",
    h2("Introduction"),
    fluidRow(
      column(
        6,
        p("You can create a guide")
      ),
      column(
        6,
        srcCode(basic)
      )
    )
  )
)

server <- function(input, output){

}

shinyApp(ui, server)
