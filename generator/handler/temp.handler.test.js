const assert = require('assert');
const app = require('../../../dist/app');
const server = require('supertest')(app);

describe('<%= name %>', () => {
  describe('#server', () => {
    afterEach(() => {
      app.close();
    });
    it('should be able to access root /', done => {
      server
        .get('/')
        .expect(200, done);
    });
  });
});