# MathJax

Simply enable MathJax when initialising the guide by setting `mathjax = TRUE`, then use MathJax as you normally would, with `helpText`.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new(mathjax = TRUE)$ # enable MathJax
  step(
    el = "text_inputId",
    title = helpText('Dynamic output 1:  $$\\alpha^2$$'),
    description = "This is where you enter the text you want to print."
  )$
  step(
    "submit_inputId",
      helpText('The busy Cauchy distribution
               $$\\frac{1}{\\pi\\gamma\\,\\left[1 +
               \\left(\\frac{x-x_0}{\\gamma}\\right)^2\\right]}\\!$$'),
    helpText('You do not see me initially: $$e^{i \\pi} + 1 = 0$$')
  )
```

Make sure you place `withMathJax` in the UI of the application, this imports the necessary dependencies.

```r
ui <- fluidPage(
  withMathJax(), # include MathJax
  use_cicerone(), 
  textInput("text_inputId", "Enter some text"),
  actionButton("submit_inputId", "Submit text"),
  verbatimTextOutput("print")
)

server <- function(input, output){

  guide$init()$start()

  txt <- eventReactive(input$submit_inputId, {
    input$text_inputId
  })

  output$print <- renderPrint(txt())
}

shinyApp(ui, server)
```
