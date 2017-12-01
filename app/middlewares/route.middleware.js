import { AccessTokenService } from '../services/accessToken.service';

var RouteMiddleware;

RouteMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
};

RouteMiddleware.prototype.acl = function(req, res, next) {
  if (hasAccessToken(req)) {
    const accessToken = getAccessToken(req);
    return validateAccessToken(this.accessTokenService, accessToken)
      .then((valid) => {
        if (valid) {
          return next(accessToken);
        }
        return unauthorizedError(err, next);
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
  const accessToken = getAccessToken(req);
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

function getAccessToken(req) {
  const headers = req.headers;
  const accessToken = headers['authorization'];
  return accessToken;
}

module.exports.RouteMiddleware = RouteMiddleware;