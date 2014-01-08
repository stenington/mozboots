var nunjucks = require('nunjucks');
var templates = require('./precompiled.js');
var path = require('path');

module.exports = {};
Object.keys(window.nunjucksPrecompiled).forEach(function (name) {
  var fName = path.basename(name, '.html');
  module.exports[fName] = nunjucks.render.bind(null, name);
});
