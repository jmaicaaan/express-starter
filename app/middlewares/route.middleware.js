import routeACL from '../route.acl.json';
import { AccessTokenService } from '../services/accessToken.service';

var RouteMiddleware;

RouteMiddleware = function() {
  this.accessTokenService = new AccessTokenService();
};

RouteMiddleware.prototype.acl = function(req, res, next) {
  const method = req.method;
  const userACL = routeACL.routes.user;
  const authorizedRoutes = userACL.authorized;
  const headers = req.headers;
  let url = req.url;

  if (!url.endsWith('/')) {
    url += '/';
  }

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