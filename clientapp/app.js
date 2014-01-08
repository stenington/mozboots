var Backbone = require('backbone');
var templates = require('./templates');
var Router = require('./router');

module.exports = {
  launch: function () {
    window.app = this;

    new Router();
    app.history = Backbone.history;

    $(function () {
      console.log(templates.body({name: 'Mike'}));
      app.history.start({pushState: true, root: '/'});
    });
  }
};

module.exports.launch();
