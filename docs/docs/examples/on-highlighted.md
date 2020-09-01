# On highlighted

The `on_highlighted` argument can be used to run arbitrary JavaScript function when said step is highlighted.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new(id = "homeGuide")$
  step(
    "step1",
    "Hello",
    "This is the first step"
  )$
  step(
    "input1",
    "Text",
    "Input has changed",
    on_highlighted = "function(element){
      var el = document.getElementById('input1');
      Shiny.inputBindings.bindingNames['shiny.textInput'].binding.receiveMessage(el, {value: 20})
    }"
  )

ui <- fluidPage(
  use_cicerone(),
  h1("Title", id = "step1"),
  numericInput(
    inputId = "input1", 
    label = "Label numeric input:", 
    value = 0
  )
)

server <- function(input, output, session){

  guide$init()$start()

}

shinyApp(ui, server)
```