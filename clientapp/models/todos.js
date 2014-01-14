var Backbone = require('backbone');
var Todo = require('./todo');

module.exports = Backbone.Collection.extend({
  url: '/todos',
  model: Todo
});
