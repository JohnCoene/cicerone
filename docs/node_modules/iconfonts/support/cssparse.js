/* jshint evil: true */

/*
 * tool for parsing CSS.
 *
 *     node support/cssparse.js < hello.css
 */

var _ = require('underscore'),
  css = require('css'),
  out;
  
readStdin(function (e, input) {
  var doc = css.parse(input);

  if (!doc || doc.type !== 'stylesheet')
    throw new Error("not a stylesheet");

  out = {};
  out.name = extractName(doc);
  out.icons = extractIcons(doc);
  out.icons = sortKeys(out.icons);

  console.log(JSON.stringify(out, null, 2));
});

/*
 * Gets the name from given CSS document `doc`.
 *
 * Bases it on `@font-face { font-family: xxxx }`. Returns a string.
 */

function extractName (doc) {
  var fontface = _(doc.stylesheet.rules)
    .find(function (r) { return r.type === 'font-face'; });
  if (!fontface) return;

  var fontfamily = _(fontface.declarations)
    .find(function (d) { return d.type === 'declaration'; });
  if (!fontfamily) return;

  return stringparse(fontfamily.value);
}

/*
 * Extracts icons from a given CSS document `doc`.
 *
 * Looks for nodes that match `.xx-yyy:before { content: zzz }`
 * and extracts `yyy: zzz`.
 *
 * Returns an object that looks like:
 *
 *     {
 *       "adjust": "\\f042",
 *       "adn": "\\f170",
 *       "align-center": "\\f037",
 *       "align-justify": "\\f039",
 *       "align-left": "\\f036",
 *       ...
 *     }
 */

function extractIcons (doc) {
  var out = {};

  doc.stylesheet.rules.forEach(function (rule) {
    var
      content = _(rule.declarations)
        .find(function (d) { return d.property === 'content'; }),
      selectors = rule.selectors;

    if (content && selectors[0].match(/:before$/)) {
      var val = stringparse(content.value);
      selectors.forEach(function (sel) {
        sel = sel.replace(/^\.[a-z]+-(.*):before$/, '$1');
        out[sel] = val;
      });
    }
  });

  return out;
}

/*
 * Takes object `obj` and sorts it by its keys.
 */

function sortKeys (obj) {
  var keys = Object.keys(obj).sort();
  var out = {};
  keys.forEach(function (key) { out[key] = obj[key]; });
  return out;
}

/*
 * Reads from stdin.
 */

function readStdin(fn) {
  process.stdin.resume(); /* paused by default */
  process.stdin.setEncoding('utf8');

  var data = '';
  process.stdin.on('data', function(chunk) { data += chunk.toString(); });
  process.stdin.on('end', function() { fn(null, data); });
}

/*
 * Converts a string value to a string. Great for values of `content:`.
 *
 *     "'hello'" => "hello"
 *     "'hi \\'world\\''" => "hi 'world'"
 */

function stringparse (str) {
  try {
    if (str.match(/^'.*'$/) || str.match(/^".*"$/))
      return str
        .replace(/^['"]/, '')
        .replace(/['"]$/, '')
        .replace(/\\'/, "'")
        .replace(/\\"/, '"');
  } catch (e) { }
  return str;
}
