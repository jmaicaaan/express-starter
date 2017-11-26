'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

var _accessToken = require('./accessToken.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = {
  addUser: function addUser(name) {
    return _models2.default.User.create({ username: name });
  },
  login: function login(username, password) {
    return _models2.default.User.findOne({ include: [_models2.default.accessToken], where: { username: username, password: password } }).then(function (user) {
      _accessToken.AccessTokenService.addUserToken(user.id);
      return user;
    }).then(function (user) {
      return user;
    });
  }
};

/** private methods */

function find() {
  return _models2.default.User.find();
}

module.exports.UserService = UserService;