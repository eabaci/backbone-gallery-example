var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var ListItemView = require('./list-item-view');

var ListView = Backbone.View.extend({
  el: '#body',

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');

    this.router = ops.router;
  },

  render: function() {
    var self = this;
    self.$el.empty();
    this.model.each(function(modelItem) {
      var listItemView = new ListItemView({
        model: modelItem,
        router: self.router
      });
      self.$el.append(listItemView.render().$el);
    });

    return this;
  }
});

module.exports = ListView;
