# Highlight

Generally speaking using the reference class, initialising guides from the `Cicerone` object, is a good idea but if you want to simply highlight an element programmatically you can use the `highlight` function.

```r
library(shiny)
library(cicerone)

ui <- fluidPage(
  use_cicerone(),
  textInput("text", "Text goes here"),
  actionButton("guide", "Highlight")
)

server <- function(input, output){

  initialise()

  observeEvent(input$guide, {
    highlight("text")
  })

}

shinyApp(ui, server)
```

The above is also doable from the reference class using the `highlight` method.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new()$
  step(
    "text",
    "Text",
    "Text goes here"
  )

ui <- fluidPage(
  use_cicerone(),
  textInput("text", "Text goes here"),
  actionButton("guide", "Highlight")
)

server <- function(input, output){

  guide$init()

  observeEvent(input$guide, {
    guide$highlight("text")
  })

}

shinyApp(ui, server)
```
