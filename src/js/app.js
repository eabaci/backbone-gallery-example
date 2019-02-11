import 'bootstrap/dist/css/bootstrap.min.css';
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Photos = require('./collections/photos');
var Router = require('./routers/router');
var ListView = require('./views/list-view');
var NavView = require('./views/nav-view');

Backbone.$(function() {
  var photos = new Photos();
  photos.fetch({
    success: function() {
      var router = new Router({ model: photos });
      Backbone.history.start();
      var navView = new NavView({ router: router });
      navView.render();
      var listView = new ListView({ model: photos, router: router });
      listView.render();
    }
  });
});
