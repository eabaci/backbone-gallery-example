var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Book = require('../models/book');

var Books = Backbone.Collection.extend({
  model: Book,
  url: 'api/books'
});

module.exports = Books;
