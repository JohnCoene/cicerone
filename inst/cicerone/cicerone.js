var driver = [],
    highlighted,
    previous,
    has_next;

function on_next(id){

  return function(){
    highlighted = driver[id].getHighlightedElement();
    previous = driver[id].getLastHighlightedElement();
    has_next = driver[id].hasNextStep();
  
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
      highlighted: highlighted,
      has_next: has_next,
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
    has_next = driver[id].hasNextStep();
  
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
      highlighted: highlighted,
      has_next: has_next,
      previous: highlighted,
      before_previous: previous
    }

    Shiny.onInputChange(id + "_cicerone_previous", data);
  }
}

Shiny.addCustomMessageHandler('cicerone-init', function(opts) {

  var id = opts.globals.id;
  var next_func = on_next(id);
  var prev_func = on_previous(id);
  opts.globals.onNext = next_func;
  opts.globals.onPrevious = prev_func;

  driver[id] = new Driver(opts.globals);

  opts.steps.forEach((step, index) => {
    if(opts.steps[index].tab_id){
      opts.steps[index].onHighlightStarted = function(element){
        var tabs = $('#' + step.tab_id);
        Shiny.inputBindings.bindingNames['shiny.bootstrapTabInput'].binding.setValue(tabs, step.tab);
      };
    }
  });

  console.log(opts.steps);

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

Shiny.addCustomMessageHandler('cicerone-highlight', function(opts) {
  driver[opts.id].highlight(opts.el);
});
