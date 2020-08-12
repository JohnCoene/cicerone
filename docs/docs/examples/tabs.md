# Tabs

You can use the arguments `tab` and `tab_id` to indicate which tab should be active to highlight an element.

```r
library(cicerone)

guide <- Cicerone$
  new()$ 
  step(
    el = "plot",
    title = "Text Input",
    description = "This is where you enter the text you want to print."
  )$
  step(
    "summary",
    "Send the Text",
    "Send the text to the server for printing",
    tab = "summary_tab",
    tab_id = "tabz"
  )

library(shiny)

ui <- fluidPage(
  use_cicerone(), # include dependencies
  h1("tabs"),
  tabsetPanel(
    id = "tabz",
    tabPanel("plot_tab", h2("show plot here", id = "plot")),
    tabPanel("summary_tab", h2("show summary here", id = "summary"))
  )
)

server <- function(input, output){

  # initialise then start the guide
  guide$init()$start()

}

shinyApp(ui, server)
```

## Navbar

Same for the navbar.

```r
library(shiny)
library(cicerone)

home_guide <- Cicerone$
  new(id = "homeGuide")$
  step(
    "home_primary",
    "Hello",
    "Hello from tab 1"
  )$
  step(
    "home_secondary",
    "Text",
    "This is an input"
  )$
  step(
    "tab_primary",
    "Hello",
    "Hello from tab 2",
    tab = "tab",
    tab_id = "nav"
  )$
  step(
    "tab_secondary",
    "Text",
    "This is an input"
  )

ui <- navbarPage(
  "cicerone",
  header = list(use_cicerone()),
  id = "nav",
  tabPanel(
    "home",
    h1("First tab", id = "home_primary"),
    textInput("home_secondary", "Text")
  ),
  tabPanel(
    "tab",
    h1("Second tab", id = "tab_primary"),
    textInput("tab_secondary", "Text")
  )
)

server <- function(input, output, session){

  home_guide$init()$start()

}

shinyApp(ui, server)
```
