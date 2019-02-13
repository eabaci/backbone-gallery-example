var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Photo = Backbone.Model.extend({
  urlRoot: 'https://jsonplaceholder.typicode.com/photos',
  defaults: {
    id: 0,
    title: 'Title',
    thumbnailUrl: 'thumbnailUrl',
    url: 'url'
  }
});

module.exports = Photo;
