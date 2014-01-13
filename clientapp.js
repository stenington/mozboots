var Moonboots = require('moonboots');
var _ = require('underscore');
var nunjucks = require('nunjucks');
var sass = require('node-sass');
var path = require('path');
var fs = require('fs');

module.exports = function (app, config) {
  config = config || {};
  var opts = _.extend({
    main: path.join(__dirname, '/clientapp/app.js'),
    developmentMode: true,
    templateFile: path.join(__dirname, '/app.html'),
    libraries: [
      path.join(__dirname, '/bower_components/foundation/js/vendor/custom.modernizr.js'),
      path.join(__dirname, '/bower_components/foundation/js/vendor/jquery.js'),
      path.join(__dirname, '/bower_components/foundation/js/vendor/fastclick.js'),
      path.join(__dirname, 'bower_components/foundation/js/foundation/foundation.js'),
      path.join(__dirname, 'bower_components/foundation/js/foundation/foundation.topbar.js')
    ],
    stylesheets: [
      path.join(__dirname, '/normalize.css'),
      path.join(__dirname, '/styles.css') 
    ],
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
    beforeBuildCSS: function () {
      console.log("Compiling SCSS...");
      fs.writeFileSync(path.join(__dirname, '/styles.css'), sass.renderSync({
        file: path.join(__dirname, '/bower_components/foundation/scss/foundation.scss')
      }));
      fs.writeFileSync(path.join(__dirname, '/normalize.css'), sass.renderSync({
        file: path.join(__dirname, '/bower_components/foundation/scss/normalize.scss')
      }));
    },
    server: app
  }, config);

  return new Moonboots(opts);
};
