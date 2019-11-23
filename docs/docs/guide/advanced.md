# Advanced

So far we've always highlighted Shiny inputs but you are of course not limited to those. The `el` argument of the `step` method takes the id of the element to highlight, it is not limited to ids of inputs. Moreover this can be useful for inputs that in html do not actually have a unique id, e.g.: `sliderInput`.

For instance the following slider input.

```r
shiny::sliderInput("slider", "Slider", value = 5, min = 0, max = 10)
```

Creates this html in the Shiny ui.

```html
<div class="form-group shiny-input-container">
  <label class="control-label" for="slider">Slider</label>
  <input class="js-range-slider" id="slider" data-min="0" data-max="10" data-from="5" data-step="1" data-grid="true" data-grid-num="10" data-grid-snap="false" data-prettify-separator="," data-prettify-enabled="true" data-keyboard="true" data-data-type="number"/>
</div>
```

Because it lacks a unique id we need to wrap it into another element in order to use cicerone.

```r
library(shiny)
library(cicerone)

guide <- Cicerone$
  new()$
  step(
    "slider-wrapper",
    "Slider",
    "Slide this!",
    position = "bottom"
  )

ui <- fluidPage(
  use_cicerone(),
  div(
    id = "slider-wrapper",
    sliderInput("slider", "Slider", value = 5, min = 0, max = 10)
  )
)

server <- function(input, output){
  guide$init()$start()
}

shinyApp(ui, server)
```
