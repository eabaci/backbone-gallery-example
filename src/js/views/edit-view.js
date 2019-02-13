var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var editViewTemplate = require('../templates/editViewTemplate.html');

var EditView = Backbone.View.extend({
  el: '#body',

  events: {
    'click .save': 'onSaveClick',
    'click .back': 'onBackClick'
  },

  template: _.template(editViewTemplate),

  initialize: function(ops) {
    this.router = ops.router;
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  update: function(model, router) {
    this.model = model;
    this.router = router;
    this.render();
  },
  onSaveClick: function(e) {
    var url = 'detail/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  },
  onBackClick: function(e) {
    var url = 'detail/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = EditView;
