var $ = require('jquery');
var _ = require('underscore');
var sinon = require('sinon/lib/sinon');
var assert = require('assert');
var NavView = require('../../../../src/js/views/nav-view');
var Photo = require('../../../../src/js/models/photo');
var Router = require('../../../../src/js/routers/router');

describe('Nav View', function() {
  var navView;
  var router;
  var photo;

  before(function() {
    this.$fixture = $('<div id="nav"></div>');
  });

  beforeEach(function() {
    photo = new Photo({});
    router = new Router({ model: photo });
    navView = new NavView({
      el: this.$fixture,
      model: photo,
      router: router
    });
  });

  after(function() {
    this.$fixture.empty();
  });

  afterEach(function() {
    navView.model.destroy();
    navView.undelegateEvents();
    navView.remove();
  });

  it('initialize call', function() {});
});
