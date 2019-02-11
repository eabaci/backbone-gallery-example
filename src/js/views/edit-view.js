var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var EditView = Backbone.View.extend({
  el: '#body',

  render: function() {
    this.$el.html('<p>edit view</p>');
    return this;
  }
});

module.exports = EditView;
