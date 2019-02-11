var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var ListItemView = Backbone.View.extend({
  events: {
    click: 'onClick'
  },
  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');

    this.router = ops.router;

    this.template = _.template($('#listItemViewTemplate').html());
    this.html = this.template(this.model.toJSON());
  },

  render: function() {
    this.$el.html(this.html);
    return this;
  },
  onClick: function(e) {
    var url = 'detail/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = ListItemView;