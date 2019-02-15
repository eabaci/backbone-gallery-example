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
    let inputs = this.$el.find('input');
    let self = this;
    console.log(inputs);
    $.each(inputs, function(index) {
      console.log(inputs[index]);
      let value = inputs[index].value;
      let name = inputs[index].name;
      if (value) self.model.set(name, value);
    });

    var url = 'detail/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  },
  onBackClick: function(e) {
    var url = 'detail/' + this.model.get('id');
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = EditView;
