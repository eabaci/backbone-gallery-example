var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var detailViewTemplate = require('../templates/detailViewTemplate.html');

var DetailsView = Backbone.View.extend({
  el: '#body',
  events: {
    'click .edit': 'onEditClick',
    'click .delete': 'onDeleteClick'
  },

  template: _.template(detailViewTemplate),

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');
    this.router = ops.router;
  },
  onEditClick: function(e) {
    var url = 'edit/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  },
  onDeleteClick: function(e) {
    var url = 'list';
    this.router.navigate(url, { trigger: true });
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  update: function(model, router) {
    this.model = model;
    this.router = router;
    this.render();
  }
});

module.exports = DetailsView;
