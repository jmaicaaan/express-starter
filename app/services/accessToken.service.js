import models from '../../models';
import { randomBytes } from 'crypto';

var AccessTokenService;

AccessTokenService = () => {};

AccessTokenService.prototype.addUserToken = (userId) => {
  const buf = randomBytes(15);
  const token = buf.toString('hex');
  return models.accessToken.create({ UserId: userId, token });
};

module.exports.AccessTokenService = AccessTokenService;