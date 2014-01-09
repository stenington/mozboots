var express = require('express');
var clientApp = require('./clientapp');
var persona = require('express-persona-observer');
var nunjucks = require('nunjucks');
var path = require('path');

var app = express();

var env = new nunjucks.Environment(new nunjucks.FileSystemLoader(path.join(__dirname, './templates')), {autoescape: true});
env.express(app);

app.use(express.json());
app.use(express.cookieParser());
app.use(express.session({
  secret: "keyboard cat"
}));

persona.express(app, {
  audience: 'http://localhost:3001',
  syncResponse: function (req, res, next) {
    return next();
  },
  selectors: {
    login: '.login'
  }
});

app.get('/login', persona.ensureLoggedOut('/'), function (req, res, next) {
  return res.render('login.html');
});

var clientApp = clientApp(app);
app.get('*', persona.ensureLoggedIn('/login'), clientApp.html());

app.listen('3001', function () {
  console.log('Listening on 3001');
});