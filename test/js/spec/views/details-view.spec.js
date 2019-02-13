var $ = require('jquery');
var _ = require('underscore');
var sinon = require('sinon/lib/sinon');
var assert = require('assert');
var DetailsView = require('../../../../src/js/views/details-view');
var Photo = require('../../../../src/js/models/photo');
var Router = require('../../../../src/js/routers/router');

describe('Details View', function() {
  var detailsView;
  var router;
  var photo;

  before(function() {
    this.$fixture = $('<div id="body"></div>');
  });

  beforeEach(function() {
    photo = new Photo({});
    router = new Router({ model: photo });
    detailsView = new DetailsView({
      el: this.$fixture,
      model: photo,
      router: router
    });
  });

  after(function() {
    this.$fixture.empty();
  });

  afterEach(function() {
    detailsView.model.destroy();
    detailsView.undelegateEvents();
    detailsView.remove();
  });

  it('initialize call', function() {
    expect(detailsView.model.get('id')).to.equal(0);
    expect(detailsView.model.get('title')).to.equal('Title');
    expect(detailsView.model.get('thumbnailUrl')).to.equal('thumbnailUrl');
  });

  it('initialize call - should throw an Error when the model is empty', function() {
    var initialize = function() {
      return new DetailsView({ router: router });
    };
    expect(initialize).to.throw(Error);
    expect(initialize).to.throw('The model needs to be set to this View');
  });

  it('render call', function() {
    detailsView.render();

    var id = detailsView.$el.find('.detailsView').attr('id');
    var title = detailsView.$el.find('.detailsView p')[0].innerHTML;
    var thumbnailUrl = detailsView.$el.find('.detailsView img').attr('src');

    expect(id).to.equal('0');
    expect(title).to.equal('Title');
    expect(thumbnailUrl).to.equal('thumbnailUrl');
  });

  it('update call', function() {
    var photoModel = new Photo({
      id: 10,
      title: 'Details View Test',
      thumbnailUrl: 'thumbnailUrl10'
    });

    detailsView.render = sinon.spy();
    sinon.assert.notCalled(detailsView.render);

    detailsView.update(photoModel, router);

    sinon.assert.callCount(detailsView.render, 1);
    expect(detailsView.model).to.be.an('object');
    expect(detailsView.model.get('id')).to.equal(10);
    expect(detailsView.model.get('title')).to.equal('Details View Test');
    expect(detailsView.model.get('thumbnailUrl')).to.equal('thumbnailUrl10');
    expect(detailsView.router).to.be.an('object');
  });

  it('onEditClick call', function() {
    detailsView.router.navigate = sinon.spy();
    detailsView.$el.find('.edit').click();
    sinon.assert.callCount(detailsView.router.navigate, 1);
    sinon.assert.calledWith(detailsView.router.navigate, 'edit/0', {
      trigger: true
    });
  });

  it('onDeleteClick call', function() {
    detailsView.router.navigate = sinon.spy();
    detailsView.$el.find('.delete').click();
    sinon.assert.callCount(detailsView.router.navigate, 1);
    sinon.assert.calledWith(detailsView.router.navigate, 'list', {
      trigger: true
    });
  });
});
