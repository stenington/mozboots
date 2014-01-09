var PageView = require('./base');
var templates = require('../templates');

module.exports = PageView.extend({
  template: templates.pages.welcome,
  render: function () {
    this.renderAndBind();
  }
});