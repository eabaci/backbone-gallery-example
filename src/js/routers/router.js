var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ListView = require('../views/list-view');
var Photo = require('../models/photo');

var Router = Backbone.Router.extend({
  routes: {
    list: 'loadListView',
    'detail/:id': 'loadDetailView',
    'edit/:id': 'loadEditView',
    add: 'loadAddView'
  },

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');
    this.model = ops.model;
    this.detailsView = ops.detailsView;
    this.editView = ops.editView;
    this.listView = ops.listView;
  },
  loadListView: function() {
    this.listView.update(this.model, this);
  },
  loadDetailView: function(id) {
    var detailsModel = this.model.get(id);
    this.detailsView.update(detailsModel, this);
  },
  loadEditView: function(id) {
    var editModel = this.model.get(id);
    this.editView.update(editModel, this);
  },
  loadAddView: function() {
    let id = this.model.length + 1;
    let newModel = new Photo({ id: id });
    this.model.add(newModel);
    this.editView.update(newModel, this);
  }
});

module.exports = Router;
