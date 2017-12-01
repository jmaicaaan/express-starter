import { AccessTokenService } from '../services/accessToken.service';

var RouteMiddleware;

RouteMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
};

RouteMiddleware.prototype.acl = function(req, res, next) {
  if (hasAccessToken(req)) {
    return validateAccessToken(this.accessTokenService, accessToken)
      .then((valid) => {
        return valid ? next() : unauthorizedError(res, next);
    });
  } else {
    return unauthorizedError(res, next);
  }
};

// Helpers

function hasAccessToken(req) {
  if (!req && !req.headers) {
    return false;
  }
  const headers = req.headers;
  const accessToken = headers['authorization'];
  return accessToken ? true : false;
}

function unauthorizedError(res, next, message) {
  const error = new Error(message || 'User unauthorized');
  res.status(401);
  return next(error);
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