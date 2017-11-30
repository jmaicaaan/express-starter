import { AccessTokenService } from '../services/accessToken.service';

var RouteMiddleware;

RouteMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
};

RouteMiddleware.prototype.acl = function(req, res, next, modelRoutes) {
  const method = req.method;
  const authorizedRoutes = modelRoutes || [];
  const headers = req.headers;
  const url = req.url;

  authorizedRoutes.forEach((routes) => {
    if (routes.method === method && routes.url === url) {
      const accessToken = headers['authorization'];
      if (accessToken) {
        return validateAccessToken(this.accessTokenService, accessToken)
          .then((valid) => {
            return valid ? next() : unauthorizedError(res, next);
          });
      } else {
        return unauthorizedError(res, next);
      }
    }
  });
  next();
};

// Helpers

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