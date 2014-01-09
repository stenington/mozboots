var Backbone = require('backbone');
var $ = require('jquery');
var templates = require('./templates');
var Router = require('./router');
var MainView = require('./views/main');
var Me = require('./models/me');

module.exports = {
  launch: function () {
    var self = window.app = this;

    window.me = new Me();

    new Router();
    app.history = Backbone.history;

    $(function () {
      self.view = new MainView({
        model: me,
        el: document.body
      });
      self.view.render();
      app.history.start({root: '/'});
    });
  },

  renderPage: function (view) {
    var container = $('#pages');

    if (app.currentPage)
      app.currentPage.hide();

    app.currentPage = view;
    container.append(view.show().el);
  }
};

module.exports.launch();
