var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ListItemView = require('./list-item-view');

var ListView = Backbone.View.extend({
  el: '#body',

  className: 'container',

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');

    this.router = ops.router;
  },

  update: function(model, router) {
    this.model = model;
    this.router = router;

    this.render();
  },

  render: function() {
    var self = this;
    self.$el.html('<div class="row"></div>');
    this.model.each(function(modelItem) {
      var listItemView = new ListItemView({
        model: modelItem,
        router: self.router
      });
      self.$el.find('.row').append(listItemView.render().$el);
    });

    return this;
  }
});

module.exports = ListView;
