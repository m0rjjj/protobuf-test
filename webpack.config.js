var path = require('path');
var argv = require('yargs').argv;

var watch = argv.watch ? true : false;

module.exports = {
  watch: watch,
  entry: './client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};