devtools::load_all()

ui <- fluidPage(
  tags$head(
    cicerone::use_cicerone(),
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
    sliderInput(
      "step",
      "Step",
      1,
      3,
      step = 1, value = 1
    ),
    actionButton(
      "guide",
      "Run Guide"
    )
  )
)

server <- function(input, output, session) {
  g <- Cicerone$new(
    allow_close = FALSE,
    id = "guide_1"
  )
  lapply(1:3, \(.x) {
    g$step(
      el = sprintf("#box_%s", .x),
      title = sprintf("This is Box %s", .x),
      description = sprintf("This is the description for Box %s", .x),
    )
  })
  observeEvent(input$guide_1_cicerone_reset, {
    print("Guide ended")
  })
  
  observeEvent(input$guide_1_cicerone_next, {
    print(input$guide_1_cicerone_next)
  })
  
  observeEvent(input$guide_1_cicerone_previous, {
    print(input$guide_1_cicerone_next)
  })
  
  observeEvent(
    input$guide,
    {
      g$init()
      g$drive(step = input$step)
    }
  )
}

shinyApp(ui, server)

