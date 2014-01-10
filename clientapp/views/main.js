var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
  template: templates.body,

  textBindings: {
    name: '.name'
  },

  events: {
    'click .login': 'login',
    'click .logout': 'logout'
  },

  render: function () {
    $('head').append(templates.head());
    this.renderAndBind({me: me});
  },

  login: function () {
    navigator.id.request();
  },

  logout: function () {
    navigator.id.logout();
  }
});
