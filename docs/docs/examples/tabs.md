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

By setting `is_id` to `FALSE` you can use any selector other than CSS/HTML `#id`s.

```r
library(shiny)
library(cicerone)

home_guide <- Cicerone$
    new(id = "homeGuide")$
    step(
        "[data-value='home']",
        "Select by data attribute",
        "based on data-value",
        is_id = FALSE
    )$
    step(
        ".trythis1",
        "Select by CSS class",
        "select the trythis1 class",
        is_id = FALSE
    )$
    step(
        ".trythis2 p span",
        "Combined selector with deep levels",
        "select the span under p tag in a trythis2 class",
        is_id = FALSE
    )$
    step(
        ".trythis3 p",
        "only the first one will work",
        "Parallel element under the same DOM node level, only the first one will work",
        is_id = FALSE
    )

ui <- navbarPage(
    "cicerone",
    header = list(use_cicerone()),
    id = "nav",
    tabPanel(
        "home",
        h2("Select class", class = "trythis1"),
        div(class = "trythis2",
            h2("Select in deep HTML levels"),
            p("not this one"), 
            p("under this one",
              br(),
              span("select this one")
            )
        ),
        div(class = "trythis3",
            h2("Selector mataches more than one element"),
            p("parallel 1"),
            p("parallel 2"),
            p("parallel 3")
        )
    )
)

server <- function(input, output, session){
    
    home_guide$init()$start()
    
}

shinyApp(ui, server)
```
