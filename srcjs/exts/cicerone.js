import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "jquery";
import "shiny";



import "./custom.css";

let drivers = [];
let highlighted;
let previous;
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

const on_next = (id) => {
  highlighted = drivers[id].getActiveElement();
  previous = drivers[id].getPreviousElement();
  has_next = drivers[id].hasNextStep();

  try {
    highlighted = highlighted.options.element.substr(1);
  } catch (err) {
    highlighted = null;
  }

  try {
    previous = previous.options.element.substr(1);
  } catch (err) {
    previous = null;
  }

  var data = {
    highlighted: highlighted,
    has_next: has_next,
    previous: highlighted,
    before_previous: previous,
  };
  Shiny.setInputValue(id + "_cicerone_next", data);
};

const on_previous = (id) => {
  highlighted = drivers[id].getActiveElement();
  previous = drivers[id].getPreviousElement();
  has_next = drivers[id].hasNextStep();

  try {
    highlighted = highlighted.options.element.substr(1);
  } catch (err) {
    highlighted = null;
  }

  try {
    previous = previous.options.element.substr(1);
  } catch (err) {
    previous = null;
  }

  var data = {
    highlighted: highlighted,
    has_next: has_next,
    previous: highlighted,
    before_previous: previous,
  };

  Shiny.setInputValue(id + "_cicerone_previous", data);
};

const on_destroy = (id) => {
  Shiny.setInputValue(id + "_cicerone_reset", true);
}
/**
 * Create an callback
 * @param {String} body The body of the user supplied callback
 * @param {String} id Of the guide
 * @returns {Function} with arguments element, index, options and a body that includes the user supplied code and the corresponding internal function.
 */
const callback_make = {
  next: (body, id) => {
    let fn = new Function ('element, index, options', body + "let id = " + id + ";\non_next(id);")
    return fn;
  },
  previous: (body, id) => {
    let fn = new Function ('element, index, options', body + "let id = " + id + ";\non_previous(id);")
    return fn;
  },
  destroy: (body, id) => {
    let fn = new Function ('element, index, options', body + "let id = " + id + ";\non_destroy(id);")
    return fn;
  },
  default: (body, id) => {
    let fn = new Function ('element, index, options', body)
    return fn;
  }
}

Shiny.addCustomMessageHandler("cicerone-init", function (opts) {
  var id = opts.globals.id;
  var next_func = make_next(id);
  var prev_func = make_previous(id);
  opts.globals.onNextClick = next_func;
  opts.globals.onPreviousClick = prev_func;
  opts.globals.onReset = function () {
    Shiny.setInputValue("cicerone_reset", true, { priority: "event" });
  };

  opts.steps.forEach((step, index) => {
    if (opts.steps[index].tab_id) {
      opts.steps[index].onHighlightStarted = onHighlightTab({
        tab_id: step.tab_id,
        tab: step.tab,
      }).getFn;
    }

    if (opts.steps[index].onHighlighted) {
      opts.steps[index].onHighlighted = new Function(
        "return " + opts.steps[index].onHighlighted,
      )();
    }

    if (opts.steps[index].onHighlightStarted && !opts.steps[index].tab_id) {
      opts.steps[index].onHighlightStarted = new Function(
        "return " + opts.steps[index].onHighlightStarted,
      )();
    }

    if (opts.steps[index].onNextClick) {
      debugger;
      opts.steps[index].onNextClick = new Function(
        "return " + opts.steps[index].onNext,
      )();
    }
  });
  
  if (opts.steps) {
    opts.globals.steps = opts.steps;
  }
  debugger;
  drivers[id] = driver(opts.globals);
});

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
});

Shiny.addCustomMessageHandler("cicerone-start", function (opts) {
  drivers[opts.id].drive(opts.step);
});

Shiny.addCustomMessageHandler("cicerone-reset", function (opts) {
  drivers[opts.id].reset();
});

Shiny.addCustomMessageHandler("cicerone-next", function (opts) {
  drivers[opts.id].moveNext();
});

Shiny.addCustomMessageHandler("cicerone-previous", function (opts) {
  drivers[opts.id].movePrevious();
});

Shiny.addCustomMessageHandler("cicerone-highlight-man", function (opts) {
  drivers[opts.id].highlight(opts);
});

Shiny.addCustomMessageHandler("cicerone-highlight", function (opts) {
  drivers[opts.id].highlight(opts.el);
});
