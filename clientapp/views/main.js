var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
  template: templates.body,

  textBindings: {
    name: '.username'
  },

  events: {
    'click .login': 'login',
    'click .logout': 'logout',
    'click a[data-page]': 'page'
  },

  render: function () {
    $('head').append(templates.head());
    this.renderAndBind({me: me});
  },

  login: function (e) {
    navigator.id.request();
    e.preventDefault();
    return false;
  },

  logout: function (e) {
    navigator.id.logout();
    e.preventDefault();
    return false;
  },

  page: function (e) {
    var name = $(e.target).data('page');
    app.router.navigate("page/" + name, { trigger: true });
    e.preventDefault();
    return false;
  }
});
