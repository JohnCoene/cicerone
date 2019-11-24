var driver = [],
    highlighted,
    previous;

function on_next(id){

  return function(){
    highlighted = driver[id].getHighlightedElement();
    previous = driver[id].getLastHighlightedElement();

    var has_next = driver[id].hasNextStep();
    Shiny.onInputChange(id + "_has_next_step", has_next);
  
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
  
    Shiny.onInputChange(id + "_cicerone_next", data);
  }
}

function on_previous(id){

  return function(){
    highlighted = driver[id].getHighlightedElement();
    previous = driver[id].getLastHighlightedElement();
  
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

    Shiny.onInputChange(id + "cicerone_previous", data);
  }
}

Shiny.addCustomMessageHandler('cicerone-init', function(opts) {

  var id = opts.globals.id;
  var next_func = on_next(id);
  var prev_func = on_previous(id);
  opts.globals.onNext = next_func;
  opts.globals.onPrevious = prev_func;

  driver[id] = new Driver(opts.globals);

  if(opts.steps)
    driver[id].defineSteps(opts.steps);
});

Shiny.addCustomMessageHandler('cicerone-start', function(opts) {
  driver[opts.id].start(opts.step);
});

Shiny.addCustomMessageHandler('cicerone-reset', function(opts) {
  driver[opts.id].reset();
});

Shiny.addCustomMessageHandler('cicerone-next', function(opts) {
  driver[opts.id].moveNext();
});

Shiny.addCustomMessageHandler('cicerone-previous', function(opts) {
  driver[opts.id].movePrevious();
});

Shiny.addCustomMessageHandler('cicerone-highlight-man', function(opts) {
  driver[opts.id].highlight(opts);
});

Shiny.addCustomMessageHandler('cicerone-get-highlighted', function(opts) {
  highlighted = driver[opts.id].getHighlightedElement();
  Shiny.onInputChange(opts.id + "_highlighted_element", highlighted.options.element, {priority: 'event'});
});

Shiny.addCustomMessageHandler('cicerone-get-previous', function(opts) {
  highlighted = driver[opts.id].getLastHighlightedElement();
  Shiny.onInputChange(opts.id + "_previous_element", highlighted.options.element, {priority: 'event'});
});

Shiny.addCustomMessageHandler('cicerone-has-next', function(opts) {
  highlighted = driver[opts.id].hasNextStep();
  Shiny.onInputChange(opts.id + "_has_next_step_man", highlighted.options.element, {priority: 'event'});
});

Shiny.addCustomMessageHandler('cicerone-highlight', function(opts) {
  driver[opts.id].highlight(opts.el);
});