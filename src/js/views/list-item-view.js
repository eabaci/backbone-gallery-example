var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var listItemViewTemplate = require('../templates/listItemViewTemplate.html');

var ListItemView = Backbone.View.extend({
  className: 'col-4',

  events: {
    click: 'onClick'
  },

  template: _.template(listItemViewTemplate),

  initialize: function(ops) {
    if (!(ops && ops.model))
      throw new Error('The model needs to be set to this View');

    this.router = ops.router;
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  onClick: function(e) {
    var url = 'detail/' + this.model.get('id');
    console.log(url);
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = ListItemView;
