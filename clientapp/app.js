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

    navigator.id.watch({
      loggedInUser: undefined,
      onlogin: function (assertion) {
        console.log('onlogin called');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/persona/verify", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.addEventListener("loadend", function(e) {
          var data = JSON.parse(this.responseText);
          if (data && data.status === "okay") {
            me.loggedInUser = data.email;
            me.synced = true;
          }
        }, false);

        xhr.send(JSON.stringify({
          assertion: assertion
        }));
      },
      onlogout: function () {
        console.log('onlogout called');
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "/persona/logout", true);
        xhr.addEventListener("loadend", function(e) {
          me.loggedInUser = null;
          me.synced = true;
        });
        xhr.send();
      }
    });

    me.on('change:synced', function () {
      $(function () {
        self.view = new MainView({
          model: me,
          el: $('div', document.body) // don't clobber the body
        });
        self.view.render();
        app.history.start({root: '/'});
      });
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
