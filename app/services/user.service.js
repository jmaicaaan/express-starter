import models from '../../models';
import { AccessTokenService } from './accessToken.service';
import dropbox from 'dropbox';

// const UserService = {
//   addUser: (name) => {
//     return models.User.create({ username: name });
//   },
//   login: (username, password) => {
//     return models.User.findOne({ include: [ models.accessToken ],  where: { username, password }})
//       .then((user) => {
//         AccessTokenService.addUserToken(user.id);
//         return user;
//       })
//       .then((user) => user);
//   }
// };

var UserService;

UserService = function() {};

UserService.prototype.addUser = (username, password) => {
  return models.User.create({ username, password });
};

UserService.prototype.login = (username, password) => {
  return models.User.findOne({ include: [ models.accessToken ],  where: { username, password }})
    .then((user) => {
      AccessTokenService.addUserToken(user.id);
      return user;
    })
    .then((user) => user);
};

UserService.prototype.find = () => {
  return find();
};

/** private methods */

function find() {
  return models.User.find({ include: [ models.accessToken ] });
}

module.exports.UserService = UserService;