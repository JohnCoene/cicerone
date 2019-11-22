var chalk = require('chalk')

/*
 * Theme
 */

var c = {
  accent1: chalk.gray, // subtitle
  accent2: chalk.blue, // build text
  headline: chalk.bold, // main title
  url: chalk.underline,
  ok: chalk.green,
  red: chalk.red,
  mute: chalk.gray
}

var symbols = {
  add: c.ok('+'),
  addDir: c.ok('+'),
  change: c.accent1('↔'),
  unlink: c.red('×'),
  unlinkDir: c.red('×'),
  wait: c.mute('···'),
  error: c.red('err ✗'),
  x: c.red('✗'),
  ok: c.ok('✓'),
  off: c.red('off'),
  on: c.ok('✓ on')
}

function Reporter () {
  this.observatory = require('observatory').settings({
    formatStatus: function (label, state) { return label },
    width: 50,
    prefix: '  '
  })
}

Reporter.prototype = {
  add: function (msg) {
    var task = this.observatory.add(msg)
    task.render = customRender
    return task
  },

  // First run
  start: function (banner, port) {
    this.add('')
    this.add(c.headline(banner))
    this.add(c.accent1('starting ' + process.env.NODE_ENV + ' - ^C to exit'))
    this.add('')

    this.tasks = {
      build: this.add('  first build').status(symbols.wait),
      // watch: this.add('  watching updates').status(symbols.wait),
      livereload: this.add('  livereload').status(symbols.wait),
      serve: this.add('  ' + c.url('http://localhost:' + port)).status(symbols.wait),
      _: this.add(''),
      status: this.add('  ' + c.accent1('Starting up...')).update()
    }
  },

  // First run: build ok
  firstBuildOk: function (res) {
    this.tasks.build.done(c.ok(res.duration + 'ms'))
  },

  // First run: build fail
  firstBuildError: function (err) {
    this.tasks.build.fail(symbols.error)
    this.showErr(err)
  },

  // First run: LR off
  livereloadOff: function () {
    this.tasks.livereload.fail(symbols.off)
  },

  // First run: LR on
  livereloadOn: function () {
    this.tasks.livereload.done(symbols.on)
  },

  // First run: Watch on
  watchOn: function () {
    // this.tasks.watch.done(symbols.on)
  },

  // First run: finally running
  running: function () {
    this.tasks.serve.done(symbols.on)

    this.tasks.status.description = '  ' + c.headline('Running')
    this.tasks.status.update()
  },

  // Watch was triggered
  buildStart: function (event, files, argsList) {
    var symbol = symbols[event] || ' '
    var fname = filesMessage(files, { short: true })

    var task = this.add(symbol + ' ' + fname).status(symbols.wait)
    this.lastTask = task
    return task
  },

  // Building complete
  buildOk: function (task, res) {
    task.done(c.ok(res.duration + 'ms'))
  },

  // Building failed
  buildFail: function (task, err) {
    task.fail(symbols.error)
    this.showErr(err)
  },

  // LiveReload was updated
  buildTo: function (files) {
    var msg = c.accent2('→ ' + filesMessage(files))
    if (process.stdout.columns > 90 && this.lastTask) {
      this.lastTask.details(msg)
    } else {
      this.add(msg).update()
    }
  },

  // Show an error
  showErr: function (err) {
    this.add('')
    this.add(symbols.x + ' ' + err.message)
    err.stack.split('\n').slice(1).forEach(function (line) {
      this.add('  ' + c.mute(line.trim()))
    }.bind(this))
    this.add('')
  }
}

function filesMessage (files, options) {
  if (files.length === 1) {
    return files[0]
  } else if (options && options.short) {
    return files[0] + ' (+' + (files.length - 1) + ')'
  } else {
    return files[0] + ' (+' + (files.length - 1) + ' more)'
  }
}

var settings = require('observatory/lib/settings')
var out = require('observatory/lib/out')

function customRender () {
  var task = this
  var statusLabel = '' + settings.formatStatus(task.statusLabel, task.state)
  var statusWidth = 7
  var output =
    settings.prefix() +
    out.padding(statusWidth - out.ln(statusLabel)) +
    statusLabel +
    '  ' +
    task.description +
    (task.detailsLabel.toString().length ? (
      out.padding(settings.width() - statusWidth - out.ln(task.description) - 2) +
      ' ' +
      task.detailsLabel) : '')
  var length = out.ln(output)
  var clear = out.padding(task.longest - length + 1)
  task.longest = Math.max(length, task.longest)
  return output + clear
}

module.exports = Reporter
