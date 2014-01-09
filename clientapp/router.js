var Backbone = require('backbone');
var WelcomePage = require('./pages/welcome');
var NextPage = require('./pages/next');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'welcome',
    'next': 'next'
  },
  welcome: function () {
    app.renderPage(new WelcomePage({
      model: me
    }));
  },
  next: function () {
    app.renderPage(new NextPage({
      model: me
    }));
  }
});
