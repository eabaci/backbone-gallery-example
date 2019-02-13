var $ = require('jquery');
var _ = require('underscore');
var sinon = require('sinon/lib/sinon');
var assert = require('assert');
var ListItemView = require('../../../../src/js/views/list-item-view');
var Photo = require('../../../../src/js/models/photo');
var Router = require('../../../../src/js/routers/router');

describe('List Item View', function() {
  var listItemView;
  var router;
  var photo;

  before(function() {
    this.$fixture = $('<div id="body"></div>');
  });

  beforeEach(function() {
    photo = new Photo({});
    router = new Router({ model: photo });
    listItemView = new ListItemView({
      el: this.$fixture,
      model: photo,
      router: router
    });
  });

  after(function() {
    this.$fixture.empty();
  });

  afterEach(function() {
    listItemView.model.destroy();
    listItemView.undelegateEvents();
    listItemView.remove();
  });

  it('initialize call', function() {});
});
