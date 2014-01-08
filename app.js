var Moonboots = require('moonboots');
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var fs = require('fs');

var app = express();

var clientapp = new Moonboots({
  main: path.join(__dirname, '/clientapp/app.js'),
  developmentMode: true,
  libraries: [
    path.join(__dirname, '/clientapp/libraries/zepto.js')
  ],
  stylesheets: [],
  beforeBuildJS: function () {
    console.log("Building JS...");
  },
  beforeBuild: function () {
    console.log('precompile, yo');
    var templates = nunjucks.precompile(
      path.join(__dirname, '/clientapp/templates'), 
      {
        include: [/.*\.html/]
      }
    );
    fs.writeFileSync(path.join(__dirname, '/clientapp/precompiled.js'), templates);
  },
  server: app
});

app.get('*', clientapp.html());

app.listen('3001', function () {
  console.log('Listening on 3001');
});