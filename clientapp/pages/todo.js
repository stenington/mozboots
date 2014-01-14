var PageView = require('./base');
var TodoView = require('../views/todo');
var Todo = require('../models/todo');
var templates = require('../templates');

module.exports = PageView.extend({
  template: templates.pages.todo,
  events: {
    'click .add-todo': 'add',
    'click .remove-done': 'clear'
  },
  render: function () {
    this.renderAndBind();
    this.renderCollection(this.collection, TodoView, this.$('.todo-list')[0]);
  },
  add: function () {
    var name = $('.new-todo-name').val();
    $('.new-todo-name').val(undefined);
    this.collection.add({
      name: name
    });
  },
  clear: function () {
    this.collection.where({ done: true }).forEach(function (model) {
      model.destroy();
    });
  }
});
