# Navbar

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
  )

tab_guide <- Cicerone$
  new()$
  step(
    "tab_primary",
    "Hello",
    "Hello from tab 2"
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

  observeEvent(input$homeGuide_cicerone_next, {
    next_step <- input$homeGuide_cicerone_next$has_next
    
    if(is.null(next_step)) next_step <- TRUE

    if(!next_step){
      updateNavbarPage(session, "nav", "tab")
      tab_guide$init()$start()
    }
  })

}

shinyApp(ui, server)
```
