import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import "jquery";
import "shiny";



import "./custom.css";

let drivers = [];
let highlighted;
let previous;
let has_next;

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

const make_previous = (id) => {
  return function () {
    return on_previous(id);
  };
};

const make_next = (id) => {
  return function () {
    return on_next(id);
  };
};

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
