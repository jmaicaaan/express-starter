const assert = require('assert');
const app = require('../../../dist/app');
const models = require('../../../models');
const bluebird = require('bluebird');
const server = require('supertest')(app);

describe('#creation of user', () => {
  let createdUser;
  before(() => {
    return models.sequelize.sync()
      .then(() => {
        return bluebird.all([
          models.User.destroy({ truncate: true })
        ]);
      })
      .then(() => {
        return models.User.create({ username: 'user123', password: 'Password123' })
          .then(user => user.dataValues);
      })
      .then((user) => {
        createdUser = user;
      });
  });

  it('should add a user', (done) => {
    server
      .post('/user')
      .send({ name: 'JM Santos' })
      .expect(200)
      .end((err, res) => {
        done(err);
      });
  });

  it('should allow user to login', (done) => {
    server
      .post('/user/login')
      .send({ username: createdUser.username, password: createdUser.password })
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body.username, createdUser.username);
        done(err);
      });
  });
});