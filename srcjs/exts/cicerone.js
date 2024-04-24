import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "jquery";
import "shiny";



import "./custom.css";

let drivers = [];
let highlighted;
let next;
let previous;
let before_previous = null;
let move_iterator = 0;
let has_next;

/**
 * Keep elements with name returning true from callback
 * @param {Object} object 
 * @param {Function} fn A callback function which takes a single argument, the name of the item, and returns a Boolean
 * @returns {Object} with the subset of entries matching criteria
 */
function keep_at(object, fn = (x) => {return true;}) {
  let nms = Object.keys(object);
  let out = {};
  for (let index = 0; index < nms.length; index++) {
    let nm = nms[index];
    if (fn(nm)) {
      out[nm] = object[nm];
    }
    
  }
  return out;
}

function divSelectors(tag){
   return tag.id ? `#${tag.id}` : `${tag.tagName.toLowerCase()}${tag.classList.length ? `.${[...tag.classList].join('.')}` : ''}`
}


function isElement(element) {
  return element instanceof Element || element instanceof Document;  
}

function censor(censor) {
  var i = 0;
  
  return function(key, value) {
    if (isElement(value))
      return divSelectors(value)
    if(i !== 0 && typeof(censor) === 'object' && typeof(value) == 'object' && censor == value) 
      return '[Circular]'; 
    
    if(i >= 29) // seems to be a harded maximum of 30 serialized objects?
      return '[Unknown]';
    
    ++i; // so we know we aren't using the original object anymore
    
    return value;  
  }
}
function toShinyInput(x) {
  let out;
  try {
    out = JSON.stringify(x, censor(x));
  } catch (error) {
    debugger;
  }
  
  out = JSON.parse(out);
  return out;
}

function ideclare(id) {
  return "let id = '" + id + "';"
}
function intersect(a, b) {
  var t;
  if (b.length > a.length) t = b, b = a, a = t; // indexOf to loop over shorter
  return a.filter(function (e) {
      return b.indexOf(e) > -1;
  });
}
function get_el(obj) {
  let out;
  try {
    out = obj.element;
  } catch (err) {
    out = null;
  }
  return out;
}
const cicerone_on = {
  state: (state) => {
    // For future use in trimming state object if it throws errors
    return state;
  },
  data: (current_driver, type = "prev") => {
    highlighted = current_driver.getActiveStep();
    has_next = current_driver.hasNextStep();
    let config = current_driver.getConfig();
    let i = current_driver.getActiveIndex();
    let is_prev = type == "prev"
    if (is_prev) {
      previous = config.steps[i];
      next = config.steps[i - 1];
    } else {
      previous = current_driver.getPreviousStep(); 
      next = has_next;
    }
    
    let elements = {
      highlighted: get_el(highlighted),
      previous: get_el(previous),
      next: get_el(next)
    };
    // Increment the number of moves for assigning `before_previous`
    move_iterator++
    // Moving backwards?
    // Give the user the info
    let out = {
      //Highlighted element
      highlighted: elements.highlighted,
      // Highlighted: full object
      highlighted_full: highlighted,
      // Next element (varies if moving backwards or forwards)
      next:  elements.next,
      // Next: full object
      next_full: next,
      // Previous element (varies if moving backwards or forwards)
      previous: elements.previous,
      previous_full: previous,
      // Before previous element
      before_previous: before_previous,
      has_next: has_next,
    };
    if (move_iterator > 1) {
      before_previous = elements.previous;
    }
    return out
  },
  get_driver: (id) => {
    // ID may be a driver itself
    let out = id;
    // If not grab it from the drivers list
    if (typeof id == "string") {
      out = drivers[id];
    }
    if (typeof out !== "object") {
      throw new Error("No driver object found!")
    }
    return out;
  },
  next: (id) => {
    // Current Driver
    let cd = cicerone_on.get_driver(id);
    let data;
    data = cicerone_on.data(cd, "next");
    Shiny.setInputValue(id + "_cicerone_next", toShinyInput(data));
    if (cd.isLastStep()) {
      Shiny.setInputValue(id + "_cicerone_reset", true);
    }
    cd.moveNext()
  },
  previous: (id) => {
    let cd = cicerone_on.get_driver(id);
    let data = cicerone_on.data(cd);
    Shiny.setInputValue(id + "_cicerone_previous", toShinyInput(data));
    cd.movePrevious()
  },
  highlight: (id) => {
    let cd = cicerone_on.get_driver(id);
    let data;
    data = cicerone_on.state(cd.getState());
    Shiny.setInputValue(id + "_cicerone_state", toShinyInput(data));
  },
  destroy: (id) => {
    let cd = cicerone_on.get_driver(id);
    Shiny.setInputValue(id + "_cicerone_reset", null);
    cd.destroy();
  }
}

/**
 * Create an callback
 * @param {String} body The body of the user supplied callback
 * @param {String} id Of the guide
 * @returns {Function} with arguments element, index, options and a body that includes the user supplied code and the corresponding internal function.
 */
const callback_make = {
  // Callbacks for step object
  step: ["onDeselected", "onHighlightStarted", "onHighlighted"],
  // Callbacks for config object
  config: ["onDeselected", "onHighlightStarted", "onHighlighted", "onPopoverRender", "onDestroyStarted", "onDestroyed", "onNextClick", "onPrevClick", "onCloseClick"],
  // Callbacks for popover object
  popover: ["onPopoverRender", "onNextClick", "onPrevClick", "onCloseClick"],
  // Required callbacks
  required: ["onNextClick", "onPrevClick", "onDestroyed", "onHighlightStarted", "onCloseClick"],
  next: (body, id) => {
    body = body || ''
    return new Function ('element, index, options', ideclare(id) + body + ";\nthis.next(id);").bind(cicerone_on);
  },
  previous: (body, id) => {
    body = ideclare(id) + (body || '') + ";\nthis.previous(id);"
    return new Function ('element, index, options', body).bind(cicerone_on);
  },
  highlight: (body, id) => {
    body = ideclare(id) + (body || '') + ";\nthis.highlight(id);"
    return new Function ('element, index, options', body).bind(cicerone_on);
  },
  close: (body, id) => {
    body = ideclare(id) + (body || '') + ";\nthis.destroy(id);"
    return new Function ('element, index, options', body).bind(cicerone_on);
  },
  default: (body, id) => {
    body = body || ''
    return new Function ('element, index, options', ideclare(id) + body).bind(cicerone_on);
  }
}


/**
 * Create a driveStep object for passing to driver.highlight
 * @param {Object} opts The configuration options
 * @param {String} id the id of the driver
 * @returns {Object} The driveStep object for passing to the highlight method
 */
function highlightDriveStep(opts, id) {
  // Initialize callbacks in the highlight
  let highlight = createCallbacks(opts.highlight, id, "step");
  // adding an onCloseClick callback overwrites the default that would otherwise destroy the driver when clicking the close icon, so we have to manually destroy it as the last line
  highlight.popover.onCloseClick = highlight.popover.onCloseClick + ";this.destroy(id);"
  // Create callbacks for the popover object, this includes the user-supplied JS and the destroy statement from above
  highlight.popover = createCallbacks(highlight.popover, id, "popover");
  return(highlight)
}

/**
 * Combine user supplied callback body with required callback functionality
 * @param {Object} obj the object for which to prep the callbacks
 * @param {String} id the id of the driver
 * @param {String} type='config' One of config, step, popover
 * @returns {Object} The original object with callback functions.
 */
function createCallbacks(obj, id, type = 'config') {
  // Retrieve all the on... callback functions
  let callbacks = keep_at(obj, (x) => {
    return x.startsWith("on")
  });
  
  // Get the required callbacks for the object
  let req = intersect(callback_make.required, callback_make[type]);
  // Get the user-declared callback functions
  req.push(...Object.keys(callbacks));
  // Only unique
  req = [...new Set(req)];
  
  
  for (let index = 0; index < req.length; index++) {
    let nm = req[index];
    let the_nm = null;
    switch (nm) {
      case 'onNextClick':
        the_nm = 'next';
        break;
      case 'onPrevClick':
        the_nm = 'previous';
        break;
      case 'onCloseClick':
        the_nm = 'close';
        break;
      case 'onHighlightStarted':
        the_nm = 'highlight';
        break;
      default:
        the_nm = 'default';
        break;
    }
    
    obj[nm] = callback_make[the_nm](obj[nm], id)
  }  
  return obj;
}
function init(opts) {
  var id = opts.id;
  // Prep global callbacks
  opts.config = createCallbacks(opts.config, id);
  let steps = opts.config.steps;
  // Prep callbacks
  if (steps) {
    steps.forEach((step, index) => {
      steps[index] = createCallbacks(step, id, "step");
      steps[index].popover = createCallbacks(step.popover, id, "popover");
    })
    // Reassign
    opts.config.steps = steps;
  }
  // Create driver
  let out = driver(opts.config);
  if (id) {
    drivers[id] = out;
  }
  return out;
}

const onHighlightTab = ({ tab_id, tab }) => ({
  tab_id,
  tab,
  getFn(element) {
    var tabs = $("#" + this.tab_id);
    console.log(this.tab_id);
    Shiny.inputBindings.bindingNames[
      "shiny.bootstrapTabInput"
    ].binding.setValue(tabs, this.tab);
  },
})

Shiny.addCustomMessageHandler("cicerone-init", init);

Shiny.addCustomMessageHandler("cicerone-start", function (opts) {
  // Set the reset value to null, it will be set to true when the guide finishes
  Shiny.setInputValue(opts.id + "_cicerone_reset", null);
  drivers[opts.id].drive(opts.step);
});

Shiny.addCustomMessageHandler("cicerone-reset", function (opts) {
  let d = drivers[opts.id];
  if (d) {
    d.destroy();
  }
});

Shiny.addCustomMessageHandler("cicerone-next", function (opts) {
  let d = drivers[opts.id];
  if (d) {
    d.moveNext();
  }
});

Shiny.addCustomMessageHandler("cicerone-previous", function (opts) {
  let d = drivers[opts.id];
  if (d) {
    d.movePrevious();
  }
});

Shiny.addCustomMessageHandler("cicerone-highlight", function (opts) {
  let id = "highlight";
  // Initialize driver.js with config (creates callbacks), without storing to `drivers`
  let d = init({config: opts.config, id: id});
  // Create a configuration object for the highlight
  let highlight = highlightDriveStep(opts, id);
  // Fire the highlight
  d.highlight(highlight);
});

Shiny.addCustomMessageHandler("cicerone-highlight-guide", function (opts) {
  let d = drivers[opts.id];
  // Create a configuration object for the highlight
  let highlight = highlightDriveStep(opts, opts.id);
  // Fire the highlight
  d.highlight(highlight);
});
