var express = require('express');
var clientApp = require('./clientapp');
var nunjucks = require('nunjucks');
var persona = require('express-persona');
var path = require('path');

var app = express();

app.use(express.json());
app.use(express.cookieParser());

persona(app, {
  audience: 'http://localhost:3001'
});

var clientApp = clientApp(app);
app.get('*', clientApp.html());

app.listen('3001', function () {
  console.log('Listening on 3001');
});