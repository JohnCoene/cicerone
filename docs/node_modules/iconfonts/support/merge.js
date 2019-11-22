var args = process.argv.slice(2);
var output = {};
for (var i = 0, len = args.length; i < len; i++) {
  var fname = args[i];
  var data = require(process.cwd() + '/' + fname);
  var name = data.name;
  output[name] = data;
}

console.log(JSON.stringify(output));
