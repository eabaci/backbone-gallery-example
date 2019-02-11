var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Photo = Backbone.Model.extend({
  urlRoot: 'https://jsonplaceholder.typicode.com/photos',
  defaults: { title: 'Title', id: 0, url: 'false' }
});

module.exports = Photo;
