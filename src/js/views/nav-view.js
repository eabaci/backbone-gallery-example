var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var navViewTemplate = require('../templates/navViewTemplate.html');

var NavView = Backbone.View.extend({
  el: '#nav',

  events: {
    'click li': 'onClick'
  },

  template: _.template(navViewTemplate),

  initialize: function(ops) {
    this.router = ops.router;
  },

  onClick: function(e) {
    var url = $(e.target).attr('data-url');
    this.router.navigate(url, { trigger: true });
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  }
});

module.exports = NavView;
