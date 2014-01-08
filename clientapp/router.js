var Backbone = require('backbone');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'home',
    'page': 'page',
    'slug/:slug': 'slug'
  },
  home: function () {
    console.log('home');
  },
  page: function () {
    console.log('page!');
  },
  slug: function (slugId) {
    console.log('slug', slugId);
  }
});
