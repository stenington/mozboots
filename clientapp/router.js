var Backbone = require('backbone');
var WelcomePage = require('./pages/welcome');
var pages = require('./pages/');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'page/todo': 'todo',
    'page/:name': 'page'
  },
  welcome: function () {
    app.renderPage(new WelcomePage({
      model: me
    }));
  },
  todo: function () {
    app.renderPage(new pages['todo']({
      model: me,
      collection: app.todos
    }));
  },
  page: function (name) {
    app.renderPage(new pages[name]({
      model: me
    }));
  }
});
