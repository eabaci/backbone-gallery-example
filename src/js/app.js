import 'bootstrap/dist/css/bootstrap.min.css';
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Photos = require('./collections/photos');
var Router = require('./routers/router');
var ListView = require('./views/list-view');
var NavView = require('./views/nav-view');
var DetailsView = require('./views/details-view');
var EditView = require('./views/edit-view');

Backbone.$(function() {
  var photos = new Photos();
  photos.fetch({
    success: function() {
      var detailsView = new DetailsView({ model: {}, router: {} });
      var editView = new EditView({ model: {}, router: {} });
      var listView = new ListView({ model: {}, router: {} });
      var router = new Router({
        model: photos,
        detailsView: detailsView,
        editView: editView,
        listView: listView
      });
      Backbone.history.start();
      var navView = new NavView({ router: router });
      navView.render();
    }
  });
});
