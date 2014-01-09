var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
  template: templates.body,

  textBindings: {
    timeOnSite: '.time-on-site',
    accumulatedTime: '.accumulated',
    thing: '.thing'
  },

  events: {
    'click .reset': 'resetTimeOnSite'
  },

  initialize: function () {
  },

  render: function () {
    this.renderAndBind({me: me});
  },

  resetTimeOnSite: function () {
    this.model.accumulatedTime += this.model.timeOnSite;
    this.model.timeOnSite = 0;
    this.model.save();
  }
});
