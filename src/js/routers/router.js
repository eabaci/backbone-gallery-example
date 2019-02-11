var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var DetailsView = require('../views/details-view');
var ListView = require('../views/list-view');
var EditView = require('../views/edit-view');

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
  },
  loadListView: function() {
    var listView = new ListView({ model: this.model, router: this });
    listView.render();
  },
  loadDetailView: function(id) {
    var detailsModel = this.model.get(id);
    var detailsView = new DetailsView({ model: detailsModel });
    detailsView.render();
  },
  loadEditView: function(id) {
    var editModel = this.model.get(id);
    var editView = new EditView({ model: editModel });
    editView.render();
  }
});

module.exports = Router;
