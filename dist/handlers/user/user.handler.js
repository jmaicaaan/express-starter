'use strict';

var _models = require('../../../models');

var models = _interopRequireWildcard(_models);

var _user = require('../../services/user.service');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports.userHandler = function (req, res) {
  var name = req.body.name || 'Lorem Ipsum';

  _user.UserService.addUser(name).then(function (user) {
    res.send('Hello');
  });
};