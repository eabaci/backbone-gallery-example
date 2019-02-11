var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var DetailsView = Backbone.View.extend({
  el: '#body',

  initialize: function() {
    this.template = _.template($('#detailViewTemplate').html());
    this.html = this.template(this.model.toJSON());
  },
  render: function() {
    this.$el.html(this.html);
    return this;
  }
});

module.exports = DetailsView;
