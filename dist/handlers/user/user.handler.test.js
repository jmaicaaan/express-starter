'use strict';

var assert = require('assert');
var app = require('../../../dist/app');
var models = require('../../../models');
var bluebird = require('bluebird');
var server = require('supertest')(app);

describe('#creation of user', function () {
  var createdUser = void 0;
  before(function () {
    return models.sequelize.sync().then(function () {
      return bluebird.all([models.User.destroy({ truncate: true })]);
    }).then(function () {
      return models.User.create({ username: 'user123', password: 'Password123' }).then(function (user) {
        return user.get();
      });
    }).then(function (user) {
      createdUser = user;
    });
  });

  it('should add a user', function (done) {
    server.post('/user').send({ name: 'JM Santos' }).expect(200).end(function (err, res) {
      done(err);
    });
  });

  it('should allow user to login', function (done) {
    server.post('/user/login').send({ username: createdUser.username, password: createdUser.password }).expect(200).end(function (err, res) {
      assert.equal(res.body.username, createdUser.username);
      done(err);
    });
  });
});