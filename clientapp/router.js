var Backbone = require('backbone');
var WelcomePage = require('./pages/welcome');
var pages = require('./pages/');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'page/:name': 'page'
  },
  welcome: function () {
    app.renderPage(new WelcomePage({
      model: me
    }));
  },
  page: function (name) {
    app.renderPage(new pages[name]({
      model: me
    }));
  }
});
