var Backbone = require('backbone');
var queryParam = require('query-param-getter');
var templates = require('./templates');
var Router = require('./router');
var MainView = require('./views/main');
var WaitingPage = require('./pages/wait');
var Me = require('./models/me');

function startPersona (opts) {
  opts.onloginSuccess = opts.onloginSuccess || function () {};
  opts.onlogout = opts.onlogout || function () {};

  navigator.id.watch({
    loggedInUser: undefined,    // for now we'll always let persona tell us
    onlogin: function (assertion) {
      console.log('onlogin called');
      var xhr = new XMLHttpRequest();
      xhr.open("POST", "/persona/verify", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.addEventListener("loadend", function(e) {
        var data = JSON.parse(this.responseText);
        if (data && data.status === "okay") {
          opts.onloginSuccess.call(this, data.email);
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
        opts.onlogout.call(this);
      });
      xhr.send();
    }
  });
}

module.exports = {
  launch: function () {
    var self = window.app = this;

    window.me = new Me({
      personaLagMs: parseInt(queryParam('personaLagMs')) || 0
    });

    app.router = new Router();
    app.history = Backbone.history;

    startPersona({
      onloginSuccess: function (email) {
        setTimeout(function () {
          me.loggedInUser = email;
          me.synced = true;
        }, me.personaLagMs);
      },
      onlogout: function () {
        setTimeout(function () {
          me.loggedInUser = null;
          me.synced = true;
        }, me.personaLagMs);
      }
    });

    // Render main view with waiting page when page is ready
    $(function () {
      self.view = new MainView({
        model: me,
        el: $('div', document.body) // don't clobber the body
      });
      self.view.render();
      self.renderPage(new WaitingPage());
      $(document).foundation();
    });

    // Route to appropriate page when page is ready and persona has synced
    me.on('change:synced', function () {
      $(function () {
        app.history.start({pushState: true, root: '/'});
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
