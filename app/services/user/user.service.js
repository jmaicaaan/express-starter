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
      return this.accessTokenService.addUserToken(user.id)
        .then((accessToken) => {
          user.get().accessToken = accessToken.get();
          return user;
        });
    })
    .then((user) => user);
};

UserService.prototype.find = function() {
  return models.User.find({ include: [ models.accessToken ] });
};

module.exports.UserService = UserService;