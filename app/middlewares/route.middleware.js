import { AccessTokenService } from '../services/index';
import { Util } from '../lib/util';

var RouteMiddleware;

RouteMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
  this.util = new Util();
};

RouteMiddleware.prototype.acl = function(req, res, next) {
  if (hasAccessToken(req, this.util)) {
    const accessToken = this.util.getAccessToken(req);
    return validateAccessToken(this.accessTokenService, accessToken)
      .then((valid) => {
        if (valid) {
          return next();
        }
        const error = this.util.unauthorizedError();
        res.status(401);
        return next(error);
    });
  } else {
    const error = this.util.unauthorizedError();
    res.status(401);
    return next(error);
  }
};

// Helpers

function hasAccessToken(req, util) {
  if (!req && !req.headers) {
    return false;
  }
  const accessToken = util.getAccessToken(req);
  return accessToken ? true : false;
}

function validateAccessToken(accessTokenService, accessToken) {
  return accessTokenService.getUserByAccessToken(accessToken)
    .then((user) => {
      if (user && user.get()) {
        return true;
      }
      return false;
    });
}

module.exports.RouteMiddleware = RouteMiddleware;