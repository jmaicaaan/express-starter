const assert = require('assert');
const app = require('../../../dist/app');
const models = require('../../../models');
const bluebird = require('bluebird');
const server = require('supertest')(app);

describe('#User', () => {
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
          .then(user => user.get());
      })
      .then((user) => {
        createdUser = user;
      });
  });

  describe('#User Creation', () => {
    it('should add a user', (done) => {
      let username = 'JM Santos';
      server
        .post('/user')
        .send({ username })
        .expect(200)
        .end((err, res) => {
          assert.equal(res.body.username, username);
          done(err);
        });
    });
  });

  describe('#User Login', () => {
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
});