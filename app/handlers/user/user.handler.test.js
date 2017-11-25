const assert = require('assert');
const app = require('../../../dist/index');
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

  after(() => {
    console.log('models.sequelize', models.sequelize);
  });

  it('should add a user', (done) => {
    server
      .post('/user')
      .send({ name: 'JM Santos' })
      .expect(200, done)
  });
});