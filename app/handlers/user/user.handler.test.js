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
          models.accessToken.destroy({ truncate: true }),
          models.User.destroy({ truncate: true })
        ]);
      })
      .then(() => {
        // used .get() to retrieve password because if _.retrieve() will remove it
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
        .post('/user/')
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

  describe('#User Me', () => {
    let createdUser;
    let accessToken;
    before(() => {
      return models.User.create({
        username: 'user-test-' + Date.now(),
        password: 'Password123'
      })
      .then((user) => {
        createdUser = user;
        return server
          .post('/user/login')
          .send({ username: createdUser.username, password: createdUser.password })
          .then((res) => {
            accessToken = res.body.accessToken.token;
          });
      });
    });
    it('should not allow unauthorized to access /user/me', (done) => {
      server
        .get('/user/me')
        .expect(401)
        .end((err, res) => {
          done(err);
        });
    });
    it('should not allow authorized to access /user/me', (done) => {
      server
        .get('/user/me')
        .set('Authorization', accessToken)
        .expect(200)
        .end((err, res) => {
          assert.equal(res.body.username, createdUser.username);
          done(err);
        });
    });
  });
});