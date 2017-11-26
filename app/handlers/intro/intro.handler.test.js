const assert = require('assert');
const app = require('../../../dist/app');
const server = require('supertest')(app);

describe('intro', () => {
  describe('#server', () => {
    it('should be able to access root /', done => {
      server
        .get('/')
        .expect(200, done);
    });
  });
});