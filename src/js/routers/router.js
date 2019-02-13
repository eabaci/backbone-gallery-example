var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ListView = require('../views/list-view');

var Router = Backbone.Router.extend({
  routes: {
    list: 'loadListView',
    'detail/:id': 'loadDetailView',
    'edit/:id': 'loadEditView'
  },

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');
    this.model = ops.model;
    this.detailsView = ops.detailsView;
    this.editView = ops.editView;
  },
  loadListView: function() {
    var listView = new ListView({ model: this.model, router: this });
    listView.render();
  },
  loadDetailView: function(id) {
    var detailsModel = this.model.get(id);
    this.detailsView.update(detailsModel, this);
  },
  loadEditView: function(id) {
    var editModel = this.model.get(id);
    this.editView.update(editModel, this);
  }
});

module.exports = Router;
