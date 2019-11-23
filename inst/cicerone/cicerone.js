var driver,
    highlighted,
    previous;

function on_next(){

  highlighted = driver.getHighlightedElement();
  previous = driver.getLastHighlightedElement();

  try{
    highlighted = highlighted.options.element.substr(1);
  }
  catch(err){
    highlighted = null;
  }

  try{
    previous = previous.options.element.substr(1);
  }
  catch(err){
    previous = null;
  }

  var data = {
    previous: highlighted,
    before_previous: previous
  }

  Shiny.onInputChange("cicerone_next", data);
}

function on_previous(){

  highlighted = driver.getHighlightedElement();
  previous = driver.getLastHighlightedElement();

  try{
    highlighted = highlighted.options.element.substr(1);
  }
  catch(err){
    highlighted = null;
  }

  try{
    previous = previous.options.element.substr(1);
  }
  catch(err){
    previous = null;
  }

  var data = {
    previous: highlighted,
    before_previous: previous
  }
  Shiny.onInputChange("cicerone_previous", data);
}

Shiny.addCustomMessageHandler('cicerone-init', function(opts) {

  opts.globals.onNext = on_next;
  opts.globals.onPrevious = on_previous;

  driver = new Driver(opts.globals);

  if(opts.steps)
    driver.defineSteps(opts.steps);
});

Shiny.addCustomMessageHandler('cicerone-start', function(opts) {
  driver.start(opts.step);
});

Shiny.addCustomMessageHandler('cicerone-reset', function(opts) {
  driver.reset();
});

Shiny.addCustomMessageHandler('cicerone-next', function(opts) {
  driver.moveNext();
});

Shiny.addCustomMessageHandler('cicerone-previous', function(opts) {
  driver.movePrevious();
});

Shiny.addCustomMessageHandler('cicerone-highlight-man', function(opts) {
  driver.highlight(opts);
});

Shiny.addCustomMessageHandler('cicerone-get-highlighted', function(opts) {
  highlighted = driver.getHighlightedElement();
  Shiny.onInputChange("cicerone_highlighted_element", highlighted.options.element, {priority: 'event'});
});

Shiny.addCustomMessageHandler('cicerone-get-previous', function(opts) {
  highlighted = driver.getLastHighlightedElement();
  Shiny.onInputChange("cicerone_previous_element", highlighted.options.element, {priority: 'event'});
});

Shiny.addCustomMessageHandler('cicerone-highlight', function(opts) {
  driver.highlight(opts.el);
});