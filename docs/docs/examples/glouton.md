# Glouton

We can use [glouton](https://github.com/ColinFay/glouton) to display the guide when the user first lands on our app, and not on subsequent visits. Glouton uses the `session` and `input` objects in the Shiny server and therefore needs to run in a reactive object. Therefore we create a JavaScript function to trigger an input when the document is loaded. This will let us check whether the user has visited the site when the page is loaded, if the cookie is not found we show the guide, if it is present we do not display the guide.

```r
library(shiny)
library(glouton)
library(cicerone)

js <- "$(document).on('shiny:connected', function(event) {
  Shiny.onInputChange('loaded', true)
});"

guide <- Cicerone$
  new()$
  step(
    "text",
    "Text",
    "Enter the text here"
  )

ui <- fluidPage(
  use_glouton(),
  use_cicerone(),
  tags$script(js),
  textInput("text", "text")
)

server <- function(input, output){
  observeEvent(input$loaded, {
    # get cookie
    visited <- fetch_cookies()
    print(visited$visited_site)
    
    # if null set cookie
    # otherwise show guide
    if(is.null(visited$visited_site)){
      add_cookie("visited_site", "yes")
      guide$init()$start()
    }
      
  })
}

shinyApp(ui, server)
```
