var $ = require('jquery');
var _ = require('underscore');
var sinon = require('sinon/lib/sinon');
var assert = require('assert');
var EditView = require('../../../../src/js/views/edit-view');
var Photo = require('../../../../src/js/models/photo');
var Router = require('../../../../src/js/routers/router');

describe('Edit View', function() {
  var editView;
  var router;
  var photo;

  before(function() {
    this.$fixture = $('<div id="body"></div>');
  });

  beforeEach(function() {
    photo = new Photo({});
    router = new Router({ model: photo });
    editView = new EditView({
      el: this.$fixture,
      model: photo,
      router: router
    });
  });

  after(function() {
    this.$fixture.empty();
  });

  afterEach(function() {
    editView.model.destroy();
    editView.undelegateEvents();
    editView.remove();
  });

  it('initialize call', function() {});
});
