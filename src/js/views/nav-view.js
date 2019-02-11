var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var NavView = Backbone.View.extend({
  el: '#nav',

  events: {
    'click li': 'onClick'
  },

  initialize: function(ops) {
    this.router = ops.router;

    this.template = _.template($('#navViewTemplate').html());
    this.html = this.template();
  },

  onClick: function(e) {
    var url = $(e.target).attr('data-url');
    this.router.navigate(url, { trigger: true });
  },

  render: function() {
    this.$el.html(this.html);
    return this;
  }
});

module.exports = NavView;
