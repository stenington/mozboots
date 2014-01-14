var _ = require('underscore');

var todos = [
  { id: 1, name: 'Make this demo app', done: true },
  { id: 2, name: '???', done: false },
  { id: 3, name: 'Profit', done: false }
];
var nextId = 4;

module.exports = function (app) {
  app.get('/todos', function (req, res, next) {
    return res.json(todos);
  });

  app.post('/todos', function (req, res, next) {
    var todo = req.body;
    var id = {id: nextId++};
    todos.push(_.extend(todo, id));
    return res.json(id);
  });

  app.put('/todos/:id', function (req, res, next) {
    var id = parseInt(req.param('id'));
    var todo = _.findWhere(todos, {id: id});
    var updated = req.body;
    Object.keys(updated).forEach(function (key) {
      todo[key] = updated[key];
    });
    return res.json({});
  });

  app.delete('/todos/:id', function (req, res, next) {
    var id = parseInt(req.param('id'));
    todos = _.reject(todos, function (todo) {
      return todo.id === id;
    });
    return res.send(200);
  });
};
