devtools::load_all()

ui <- fluidPage(
  tags$head(
    tags$link(rel = "stylesheet", type = "text/css", href = "custom.css")
  ),
  rlang::exec(div,
    class = "flex flex-row w-100",
    !!!lapply(1:3, \(.x) {
      div(class = "basis-1/3",
          id = sprintf("box_%s", .x),
          sprintf("Box %s", .x))
    })
  ),
  div(
    actionButton(
      "guide",
      "Run Guide"
    )
  )
)

server <- function(input, output, session) {
  g <- Cicerone$new(
    allow_close = FALSE,
    id = "guide_1",
    opacity = 4
  )
  lapply(1:3, \(.x) {
    g$step(
      el = sprintf("#box_%s", .x),
      title = sprintf("This is Box %s", .x),
      description = sprintf("This is the description for Box %s", .x),
    )
  })
  
  observeEvent(
    input$guide,
    {
      g$init()
    }
  )
}

shinyApp(ui, server)

