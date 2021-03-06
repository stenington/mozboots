var express = require('express');
var clientApp = require('./clientapp');
var api = require('./api');
var nunjucks = require('nunjucks');
var persona = require('express-persona');

const PORT = process.env.PORT || 3001;
const URL = process.env.URL || 'http://localhost:' + PORT;

var app = express();

app.use(express.json());
app.use(express.cookieParser());

persona(app, {
  audience: URL
});

api(app);
var clientApp = clientApp(app);
app.get('*', clientApp.html());

app.listen(PORT, function () {
  console.log('Listening on', PORT);
});