const path = require('path');
const fs = require('fs');

// Read config files
var outputPath = fs.readFileSync('./srcjs/config/output_path.json');
var entryPoints = fs.readFileSync('./srcjs/config/entry_points.json');
var externals = fs.readFileSync('./srcjs/config/externals.json');
var misc = fs.readFileSync('./srcjs/config/misc.json');
var loaders = fs.readFileSync('./srcjs/config/loaders.json', 'utf8');

// parse
loaders = JSON.parse(loaders);
misc = JSON.parse(misc);
externals = JSON.parse(externals);
entryPoints = JSON.parse(entryPoints);

// parse regex
loaders.forEach((loader) => {
  loader.test = RegExp(loader.test);
  return(loader);
})

// placeholder for plugins
var plugins = [
];

// define options
var options = {
  entry: entryPoints,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, JSON.parse(outputPath)),
  },
  externals: externals,
  module: {
    rules: loaders
  },
  plugins: plugins
};

// add misc
if(misc.resolve)
  options.resolve = misc.resolve;

// export
module.exports = options;
