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

You can also fetch the previously highlighted element with `get_previous_el`. There are also the `input$ciceroneId_cicerone_next` and `input$ciceroneId_cicerone_previous` which are triggered every time the user presses "next" or "previous". Where `ciceroneId` is the id used when creating the guide. The id defaults to `NULL` and internally generates a random id; to capture those events you will have to supply the `id`.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new(
    opacity = .3, 
    id = "guide" # supply id
  )$
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
    input$guide_cicerone_next
  })
}

shinyApp(ui, server)
```