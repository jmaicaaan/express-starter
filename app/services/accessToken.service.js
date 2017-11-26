import models from '../../models';
import { randomBytes } from 'crypto';

const AccessTokenService = {
  addUserToken: (userId) => {
    const buf = randomBytes(15);
    const token = buf.toString('hex');
    return models.accessToken.create({ UserId: userId, token });
  }
};

module.exports.AccessTokenService = AccessTokenService;