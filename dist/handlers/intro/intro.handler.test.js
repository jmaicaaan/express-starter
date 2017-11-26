'use strict';

var assert = require('assert');
var app = require('../../../dist/app');
var server = require('supertest')(app);

describe('intro', function () {
  describe('#server', function () {
    it('should be able to access root /', function (done) {
      server.get('/').expect(200, done);
    });
  });
});