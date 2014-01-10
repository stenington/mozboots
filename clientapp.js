var Moonboots = require('moonboots');
var _ = require('underscore');
var nunjucks = require('nunjucks');
var path = require('path');
var fs = require('fs');

module.exports = function (app, config) {
  config = config || {};
  var opts = _.extend({
    main: path.join(__dirname, '/clientapp/app.js'),
    developmentMode: true,
    templateFile: path.join(__dirname, '/app.html'),
    libraries: [
      path.join(__dirname, '/node_modules/jquery/dist/jquery.js')
    ],
    stylesheets: [],
    beforeBuildJS: function () {
      console.log("Building JS...");
    },
    beforeBuild: function () {
      console.log("Precompiling templates...");
      var templates = nunjucks.precompile(
        path.join(__dirname, '/clientapp/templates'), 
        {
          include: [/.*\.html/]
        }
      );
      fs.writeFileSync(path.join(__dirname, '/clientapp/precompiled.js'), templates);
    },
    server: app
  }, config);

  return new Moonboots(opts);
};
