var Moonboots = require('moonboots');
var express = require('express');
var nunjucks = require('nunjucks');
var path = require('path');
var fs = require('fs');

var app = express();
app.use(express.json());

var clientapp = new Moonboots({
  main: path.join(__dirname, '/clientapp/app.js'),
  developmentMode: true,
  libraries: [
    path.join(__dirname, '/node_modules/jquery/dist/jquery.js') 
  ],
  stylesheets: [],
  beforeBuildJS: function () {
    console.log("Building JS...");
  },
  beforeBuild: function () {
    console.log("Precompiling templates...");
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

var time = 15;

app.get('/me', function (req, res, next) {
  res.json({accumulatedTime: time});
});
app.post('/me', function (req, res, next) {
  console.log(req.body);
  time = req.param('accumulatedTime'); 
  res.json({accumulatedTime: time, thing: Math.random()*1000});
});
app.get('*', clientapp.html());

app.listen('3001', function () {
  console.log('Listening on 3001');
});