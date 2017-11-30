'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

var _accessToken = require('./accessToken.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService;

UserService = function UserService() {
  this.accessTokenService = new _accessToken.AccessTokenService();
};

UserService.prototype.addUser = function (username, password) {
  return _models2.default.User.create({ username: username, password: password });
};

UserService.prototype.login = function (username, password) {
  var _this = this;

  return _models2.default.User.findOne({ where: { username: username, password: password } }).then(function (user) {
    return _this.accessTokenService.addUserToken(user.id).then(function (accessToken) {
      user.get().accessToken = accessToken.get();
      return user;
    });
  }).then(function (user) {
    return user;
  });
};

UserService.prototype.find = function () {
  return _models2.default.User.find({ include: [_models2.default.accessToken] });
};

module.exports.UserService = UserService;