'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = {
  addUser: function addUser(name) {
    return _models2.default.User.create({ username: name });
  },
  login: function login(username, password) {
    // create access token using service
    return _models2.default.User.findOne({ where: { username: username, password: password } }).then(function (user) {
      return user;
    });
  }
};

/** private methods */

function find() {
  return _models2.default.User.find();
}

module.exports.UserService = UserService;