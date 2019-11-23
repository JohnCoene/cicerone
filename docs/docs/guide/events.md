# Events

Cicerone lets you capture how users browse the guide by letting you retrieve the id of the element currently highlighted. The method `get_highlighted_el` will return the id the the currently highlighted step.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new(opacity = .3)$
  step("one", "Try", "Try")$
  step("two", "Cicerone", "Cicerone")$
  step("three", "Right", "right")$
  step("four", "Away", "away")

ui <- fluidPage(
  use_cicerone(),
  h1("Try", id = "one"),
  h1("cicerone", id = "two"),
  h1("right", id = "three"),
  h1("away", id = "four"),
  verbatimTextOutput("highlighted")
)

server <- function(input, output){
  guide$init()$start()

  output$highlighted <- renderPrint({
    guide$get_highlighted_el()
  })
}

shinyApp(ui, server)
```