var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'welcome'
  },
  welcome: function () {
    console.log('welcome');
  }
});
