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
    ),
    shiny::helpText("Use Guide to highlight step. Guide must run first."),
    actionButton(
      "guide_highlight",
      "Highlight Selected Step"
    )
  ),
  rlang::exec(div,
              class = "flex flex-row w-100",
              !!!lapply(1:3, \(.x) {
                div(class = "basis-1/3",
                    id = sprintf("el_%s", .x),
                    sprintf("Element %s", .x))
              })
  ),
  div(
    sliderInput(
      "el_highlight",
      "Element",
      1,
      3,
      step = 1, value = 1
    ),
    actionButton(
      "highlight",
      "Highlight Element"
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
      # Test get_driver method inside of callback
      on_popover_render = "d = this.get_driver(id); console.log(d);"
    )
  })
  observeEvent(input$guide_1_cicerone_reset, {
    print("Guide ended")
  })
  
  observeEvent(input$guide_1_cicerone_next, {
    print("Next:")
    print(input$guide_1_cicerone_next)
  })
  
  observeEvent(input$guide_1_cicerone_previous, {
    print("Previous:")
    print(input$guide_1_cicerone_previous)
  })
  
  observeEvent(input$guide_1_cicerone_state, {
    print("State:")
    print(str(input$guide_1_cicerone_state))
  })
  
  observeEvent(input$guide_highlight, {
    g$highlight(el = sprintf("#box_%s", input$step), title = "Highlight using previous guide", "This button should be highlighted with the options applied to the `g` object at initialization.")
  })
  
  observeEvent(
    input$guide,
    {
      g$init()
      g$drive(step = input$step)
    }
  )
  
  observeEvent(input$highlight, {
    .x <- input$el_highlight
    highlight(
      el = sprintf("#el_%s", .x),
      title = sprintf("This is Element %s", .x),
      description = sprintf("This is the description for Element %s. This is a <a href='https://www.google.com' target='_blank'>link to Google</a>", .x),
    )
  })
}

shinyApp(ui, server)

