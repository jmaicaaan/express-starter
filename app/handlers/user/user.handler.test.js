const assert = require('assert');
const app = require('../../../dist/app');
const models = require('../../../models');
const bluebird = require('bluebird');
const server = require('supertest')(app);

describe('#creation of user', () => {
  before(() => {
    return models.sequelize.sync();
  });

  beforeEach(() => {
    return bluebird.all([
      models.User.destroy({ truncate: true })
    ]);
  });

  it('should add a user', (done) => {
    server
      .post('/user')
      .send({ name: 'JM Santos' })
      .expect(200)
      .end((err ,res ) => {
        done(err);
      })
  });
});