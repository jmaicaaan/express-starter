import models from '../../models';
import { AccessTokenService } from './accessToken.service';

var UserService;

UserService = function() {
  this.accessTokenService = new AccessTokenService();
};

UserService.prototype.addUser = function(username, password) {
  return models.User.create({ username, password });
};

UserService.prototype.login = function(username, password) {
  return models.User.findOne({ include: [ models.accessToken ],  where: { username, password }})
    .then((user) => {
      this.accessTokenService.addUserToken(user.id);
      return user;
    })
    .then((user) => user);
};

UserService.prototype.find = function() {
  return models.User.find({ include: [ models.accessToken ] });
};

module.exports.UserService = UserService;