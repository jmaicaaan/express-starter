import { AccessTokenService, UserService } from '../services/index';
import { Util } from '../lib/util';

var MeMiddleware;

MeMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
  this.userService = new UserService();
  this.util = new Util();
};

MeMiddleware.prototype.getMe = function(req, res, next) {
  if (req.headers) {
    const accessToken = this.util.getAccessToken(req);
    if (accessToken) {
      this.userService.findMe(accessToken)
        .then((user) => {
        res.send(user.get());
      });
    }
  } else {
    const error = this.util.unauthorizedError(res);
    return next(error);
  }
};

module.exports.MeMiddleware = MeMiddleware;