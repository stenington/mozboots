var HumanView = require('human-view');
var templates = require('../templates');

module.exports = HumanView.extend({
  template: templates.includes.todo,
  events: {
    'click input': 'check'
  },
  classBindings: {
    done: 'span'
  },
  render: function () {
    this.renderAndBind({ todo: this.model });
  },
  check: function () {
    var done = !!this.$el.find('input').prop('checked');
    this.model.done = done;
  }
});
