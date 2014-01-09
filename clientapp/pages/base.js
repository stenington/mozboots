var HumanView = require('human-view');

module.exports = HumanView.extend({
  show: function () {
    this.render();
    return this;
  },
  hide: function () {
    this.remove();
    return this;
  }
});
