# Advanced

This documents a somewhat more advanced usage of cicerone. Below we build another application, we add a button that will allow users to restart the guide (we'll handle the server part later).

```r
library(shiny)

ui <- fluidPage(
  numericInput("nobs", "Observations", min = 50, max = 200, value = 20),
  actionButton("submit_button", "Submit observations"),
  plotOutput("hist"),
  actionButton("guide", "Guide")
)

server <- function(input, output){
  dat <- eventReactive(input$submit_button, {
    runif(input$nobs)
  })

  output$hist <- renderPlot({
    hist(dat())
  })
}

shinyApp(ui, server)
```

Let's a guide to walk users through. We'll pretend this app is truly complicated and that we want to force users to go through the guide before they can interact with our app by setting `allow_close` to `TRUE`.

```r
library(cicerone)

guide <- Cicerone$
  new()$
  step(
    "nobs",
    "Observations",
    "Number of observations to draw distribution"
  )$
  step(
    "submit_button",
    "Submit Data",
    "Hit the button after you've set the number of observations"
  )$
  step(
    "hist",
    "Histogram",
    "The histogram appears here."
  )
```

Now we can include the guide in our application. Again we source the dependencies with `use_cicerone` and in the server launch the guide when the app loads `guide$init()$start()`. Regarding the button, we simply observe the event and `start()` on click.

```r
library(shiny)

ui <- fluidPage(
  use_cicerone(),
  numericInput("nobs", "Observations", min = 50, max = 200, value = 20),
  actionButton("submit_button", "Submit observations"),
  plotOutput("hist"),
  actionButton("guide", "Guide")
)

server <- function(input, output){

  guide$
    init()$
    start()

  dat <- eventReactive(input$submit_button, {
    runif(input$nobs)
  })

  output$hist <- renderPlot({
    hist(dat())
  })

  observeEvent(input$guide, {
    guide$start()
  })
}

shinyApp(ui, server)
```

Note that the `start` method takes a `step` argument which defaults to 1, the first step, you may start the guide at any other step.
