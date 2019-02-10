var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Book = Backbone.Model.extend({
  urlRoot: 'app/books',
  defaults: {}
});

module.exports = Book;
