'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

var _crypto = require('crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AccessTokenService = {
  addUserToken: function addUserToken(userId) {
    var buf = (0, _crypto.randomBytes)(15);
    var token = buf.toString('hex');
    return _models2.default.accessToken.create({ UserId: userId, token: token });
  }
};

module.exports.AccessTokenService = AccessTokenService;