'use strict';

var _accessToken = require('../services/accessToken.service');

var RouteMiddleware;

RouteMiddleware = function RouteMiddleware() {
  this.accessTokenService = new _accessToken.AccessTokenService();
};

RouteMiddleware.prototype.acl = function (req, res, next, modelRoutes) {
  var _this = this;

  var method = req.method;
  var authorizedRoutes = modelRoutes || [];
  var headers = req.headers;
  var url = req.url;

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