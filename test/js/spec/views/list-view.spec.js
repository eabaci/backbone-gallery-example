var $ = require('jquery');
var _ = require('underscore');
var sinon = require('sinon/lib/sinon');
var assert = require('assert');
var ListView = require('../../../../src/js/views/list-view');
var Photo = require('../../../../src/js/models/photo');
var Router = require('../../../../src/js/routers/router');

describe('List View', function() {
  var listView;
  var router;
  var photo;

  before(function() {
    this.$fixture = $('<div id="body"></div>');
  });

  beforeEach(function() {
    photo = new Photo({});
    router = new Router({ model: photo });
    listView = new ListView({
      el: this.$fixture,
      model: photo,
      router: router
    });
  });

  after(function() {
    this.$fixture.empty();
  });

  afterEach(function() {
    listView.model.destroy();
    listView.undelegateEvents();
    listView.remove();
  });

  it('initialize call', function() {});
});
