'use strict';

var assert = require('assert');
var app = require('../../../dist/app');
var server = require('supertest');

describe('intro', function () {
  describe('#server', function () {
    it('should be able to access root /', function (done) {
      server(app).get('/').expect(200, done);
    });
  });
});