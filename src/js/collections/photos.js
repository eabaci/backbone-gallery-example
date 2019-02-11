var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Photo = require('../models/photo');

var Photos = Backbone.Collection.extend({
  model: Photo,
  url: 'https://jsonplaceholder.typicode.com/photos'
});

module.exports = Photos;
