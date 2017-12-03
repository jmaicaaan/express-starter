import models from '../../../models';
import { AccessTokenService } from '../index';
import { Util } from '../../../dist/lib/util';

var UserService;

UserService = function() {
  this.accessTokenService = new AccessTokenService();
  this.util = new Util();
  registerInstanceHooks.call(this);
};

UserService.prototype.addUser = function(username, password) {
  return models.User.create({ username, password });
};

UserService.prototype.login = function(username, password) {

  /**
   * _.retrieve()
   * Added as an instance method in the model to remove properties at an instance level
   *
   */

  return models.User.findOne({ where: { username, password }})
    .then((user) => {
      if (user && user._retrieve()) {
        user = user._retrieve();
        return this.accessTokenService.addUserToken(user.id)
          .then((accessToken) => {
            user.accessToken = accessToken.get();
            return user;
        });
      } else {
        throw this.util.invalidLoginError();
      }
    });
};

UserService.prototype.find = function(filter) {
  if (!filter) {
    filter = {};
  }
  return models.User.find(filter)
    .then((user) => user._retrieve());
};

UserService.prototype.findMe = function(accessToken) {
  return models.User.findOne({
    include: [{
      model: models.accessToken,
      where: { token: accessToken }
    }]
  })
  .then((user) => user._retrieve());
};

function registerInstanceHooks() {
  models.User.beforeCreate((user, options) => {
    if (user.password) {
      return this.util.hashPassword(user.password)
        .then((hash) => {
          user.password = hash;
        });
    }
  });
}

module.exports.UserService = UserService;