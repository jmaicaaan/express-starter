'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService = {
  addUser: function addUser(name) {
    return _models2.default.User.create({ username: name });
  }
};

module.exports.UserService = UserService;