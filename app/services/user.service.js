import models from '../../models';
import { AccessTokenService } from './accessToken.service';

const UserService = {
  addUser: (name) => {
    return models.User.create({ username: name });
  },
  login: (username, password) => {
    return models.User.findOne({ include: [ models.accessToken ],  where: { username, password }})
      .then((user) => {
        AccessTokenService.addUserToken(user.id);
        return user;
      })
      .then((user) => user);
  }
};

/** private methods */

function find() {
  return models.User.find();
}

module.exports.UserService = UserService;