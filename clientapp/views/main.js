var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
  template: templates.body,

  render: function () {
    $('head').append(templates.head());
    this.renderAndBind({me: me});
  }
});
