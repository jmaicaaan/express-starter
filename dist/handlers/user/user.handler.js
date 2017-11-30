'use strict';

var _models = require('../../../models');

var models = _interopRequireWildcard(_models);

var _user = require('../../services/user.service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userService = new _user.UserService();

var UserHandler = function UserHandler() {};

UserHandler.prototype.addUser = function (req, res) {
  var username = req.body.username || 'Lorem Ipsum';
  var password = req.body.password;
  userService.addUser(username, password).then(function (user) {
    res.send(user);
  });
};

UserHandler.prototype.login = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  userService.login(username, password).then(function (user) {
    res.send(user);
  });
};

UserHandler.prototype.find = function (req, res) {
  userService.find().then(function (data) {
    res.send(data.get());
  });
};

module.exports.UserHandler = UserHandler;