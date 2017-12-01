import models from '../../../models';
import { randomBytes } from 'crypto';

var AccessTokenService;

AccessTokenService = function() {};

AccessTokenService.prototype.addUserToken = function(userId) {
  const buf = randomBytes(15);
  const token = buf.toString('hex');
  return models.accessToken.create({ UserId: userId, token });
};

AccessTokenService.prototype.getUserByAccessToken = function(accessToken) {
  return models.accessToken.find({ where: { token: accessToken } });
}

module.exports.AccessTokenService = AccessTokenService;