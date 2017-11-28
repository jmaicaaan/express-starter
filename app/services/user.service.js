import models from '../../models';
import { AccessTokenService } from './accessToken.service';

var UserService;

UserService = function() {
  this.accessTokenService = new AccessTokenService();
};

UserService.prototype.addUser = (username, password) => {
  return models.User.create({ username, password });
};

UserService.prototype.login = (username, password) => {
  var userService = new UserService();
  return models.User.findOne({ include: [ models.accessToken ],  where: { username, password }})
    .then((user) => {
      userService.accessTokenService.addUserToken(user.id);
      return user;
    })
    .then((user) => user);
};

UserService.prototype.find = () => {
  return models.User.find({ include: [ models.accessToken ] });
};

module.exports.userService = UserService;
module.exports.UserService = UserService;