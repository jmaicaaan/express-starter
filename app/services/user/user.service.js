import models from '../../../models';
import { AccessTokenService } from '../index';

var UserService;

UserService = function() {
  this.accessTokenService = new AccessTokenService();
};

UserService.prototype.addUser = function(username, password) {
  return models.User.create({ username, password });
};

UserService.prototype.login = function(username, password) {
  return models.User.findOne({ where: { username, password }})
    .then((user) => {
      if (user && user.get()) {
        return this.accessTokenService.addUserToken(user.get().id)
          .then((accessToken) => {
            user.get().accessToken = accessToken.get();
            return user;
        });
      } else {
        throw createInvalidLoginError();
      }
    })
    .then((user) => user);
};

UserService.prototype.find = function(filter) {
  if (!filter) {
    filter = {};
  }
  return models.User.find(filter);
};

UserService.prototype.findMe = function(accessToken) {
  return models.User.find({ include: [{ 
      model: models.accessToken,
      where: { token: accessToken }
    }]
  });
};

// helpers

function createInvalidLoginError() {
  const error = new Error('Invalid login credentials');
  error.name = 'INVALID_LOGIN_CREDENTIALS';
  return error;
}

module.exports.UserService = UserService;