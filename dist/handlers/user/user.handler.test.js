'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var models = require('../../../models');
var bluebird = require('bluebird');
var server = require('supertest')(app);

describe('#creation of user', function () {
  before(function () {
    return models.sequelize.sync();
  });

  beforeEach(function () {
    return bluebird.all([models.User.destroy({ truncate: true })]);
  });

  after(function () {
    console.log('models.sequelize', models.sequelize);
  });

  it('should add a user', function (done) {
    server.post('/user').send({ name: 'JM Santos' }).expect(200, done);
  });
});