'use strict';

var _routeAcl = require('../route.acl.json');

var _routeAcl2 = _interopRequireDefault(_routeAcl);

var _accessToken = require('../services/accessToken.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RouteMiddleware;

RouteMiddleware = function RouteMiddleware() {
  this.accessTokenService = new _accessToken.AccessTokenService();
};

RouteMiddleware.prototype.acl = function (req, res, next) {
  var _this = this;

  var method = req.method;
  var userACL = _routeAcl2.default.routes.user;
  var authorizedRoutes = userACL.authorized;
  var headers = req.headers;
  var url = req.url;

  if (!url.endsWith('/')) {
    url += '/';
  }

  authorizedRoutes.forEach(function (routes) {
    if (routes.method === method && routes.url === url) {
      var accessToken = headers['authorization'];
      if (accessToken) {
        return validateAccessToken(_this.accessTokenService, accessToken).then(function (valid) {
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
  var error = new Error(message || 'User unauthorized');
  res.status(401);
  return next(error);
}

function validateAccessToken(accessTokenService, accessToken) {
  return accessTokenService.getUserByAccessToken(accessToken).then(function (user) {
    if (user && user.get()) {
      return true;
    }
    return false;
  });
}

module.exports.RouteMiddleware = RouteMiddleware;