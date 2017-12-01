'use strict';

var _accessToken = require('../services/accessToken.service');

var RouteMiddleware;

RouteMiddleware = function RouteMiddleware() {
  this.accessTokenService = new _accessToken.AccessTokenService();
};

RouteMiddleware.prototype.acl = function (req, res, next) {
  if (hasAccessToken(req)) {
    return validateAccessToken(this.accessTokenService, accessToken).then(function (valid) {
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
  var headers = req.headers;
  var accessToken = headers['authorization'];
  return accessToken ? true : false;
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9taWRkbGV3YXJlcy9yb3V0ZS5taWRkbGV3YXJlLmpzIl0sIm5hbWVzIjpbIlJvdXRlTWlkZGxld2FyZSIsImFjY2Vzc1Rva2VuU2VydmljZSIsInByb3RvdHlwZSIsImFjbCIsInJlcSIsInJlcyIsIm5leHQiLCJoYXNBY2Nlc3NUb2tlbiIsInZhbGlkYXRlQWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlbiIsInRoZW4iLCJ2YWxpZCIsInVuYXV0aG9yaXplZEVycm9yIiwiaGVhZGVycyIsIm1lc3NhZ2UiLCJlcnJvciIsIkVycm9yIiwic3RhdHVzIiwiZ2V0VXNlckJ5QWNjZXNzVG9rZW4iLCJ1c2VyIiwiZ2V0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSxlQUFKOztBQUVBQSxrQkFBa0IsMkJBQVc7QUFDM0IsT0FBS0Msa0JBQUwsR0FBMEIscUNBQTFCO0FBQ0QsQ0FGRDs7QUFJQUQsZ0JBQWdCRSxTQUFoQixDQUEwQkMsR0FBMUIsR0FBZ0MsVUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxJQUFuQixFQUF5QjtBQUN2RCxNQUFJQyxlQUFlSCxHQUFmLENBQUosRUFBeUI7QUFDdkIsV0FBT0ksb0JBQW9CLEtBQUtQLGtCQUF6QixFQUE2Q1EsV0FBN0MsRUFDSkMsSUFESSxDQUNDLFVBQUNDLEtBQUQsRUFBVztBQUNmLGFBQU9BLFFBQVFMLE1BQVIsR0FBaUJNLGtCQUFrQlAsR0FBbEIsRUFBdUJDLElBQXZCLENBQXhCO0FBQ0gsS0FITSxDQUFQO0FBSUQsR0FMRCxNQUtPO0FBQ0wsV0FBT00sa0JBQWtCUCxHQUFsQixFQUF1QkMsSUFBdkIsQ0FBUDtBQUNEO0FBQ0YsQ0FURDs7QUFXQTs7QUFFQSxTQUFTQyxjQUFULENBQXdCSCxHQUF4QixFQUE2QjtBQUMzQixNQUFJLENBQUNBLEdBQUQsSUFBUSxDQUFDQSxJQUFJUyxPQUFqQixFQUEwQjtBQUN4QixXQUFPLEtBQVA7QUFDRDtBQUNELE1BQU1BLFVBQVVULElBQUlTLE9BQXBCO0FBQ0EsTUFBTUosY0FBY0ksUUFBUSxlQUFSLENBQXBCO0FBQ0EsU0FBT0osY0FBYyxJQUFkLEdBQXFCLEtBQTVCO0FBQ0Q7O0FBRUQsU0FBU0csaUJBQVQsQ0FBMkJQLEdBQTNCLEVBQWdDQyxJQUFoQyxFQUFzQ1EsT0FBdEMsRUFBK0M7QUFDN0MsTUFBTUMsUUFBUSxJQUFJQyxLQUFKLENBQVVGLFdBQVcsbUJBQXJCLENBQWQ7QUFDQVQsTUFBSVksTUFBSixDQUFXLEdBQVg7QUFDQSxTQUFPWCxLQUFLUyxLQUFMLENBQVA7QUFDRDs7QUFFRCxTQUFTUCxtQkFBVCxDQUE2QlAsa0JBQTdCLEVBQWlEUSxXQUFqRCxFQUE4RDtBQUM1RCxTQUFPUixtQkFBbUJpQixvQkFBbkIsQ0FBd0NULFdBQXhDLEVBQ0pDLElBREksQ0FDQyxVQUFDUyxJQUFELEVBQVU7QUFDZCxRQUFJQSxRQUFRQSxLQUFLQyxHQUFMLEVBQVosRUFBd0I7QUFDdEIsYUFBTyxJQUFQO0FBQ0Q7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQU5JLENBQVA7QUFPRDs7QUFFREMsT0FBT0MsT0FBUCxDQUFldEIsZUFBZixHQUFpQ0EsZUFBakMiLCJmaWxlIjoicm91dGUubWlkZGxld2FyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY2Vzc1Rva2VuU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2FjY2Vzc1Rva2VuLnNlcnZpY2UnO1xyXG5cclxudmFyIFJvdXRlTWlkZGxld2FyZTtcclxuXHJcblJvdXRlTWlkZGxld2FyZSA9IGZ1bmN0aW9uKCkge1xyXG4gIHRoaXMuYWNjZXNzVG9rZW5TZXJ2aWNlID0gbmV3IEFjY2Vzc1Rva2VuU2VydmljZSgpO1xyXG59O1xyXG5cclxuUm91dGVNaWRkbGV3YXJlLnByb3RvdHlwZS5hY2wgPSBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xyXG4gIGlmIChoYXNBY2Nlc3NUb2tlbihyZXEpKSB7XHJcbiAgICByZXR1cm4gdmFsaWRhdGVBY2Nlc3NUb2tlbih0aGlzLmFjY2Vzc1Rva2VuU2VydmljZSwgYWNjZXNzVG9rZW4pXHJcbiAgICAgIC50aGVuKCh2YWxpZCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB2YWxpZCA/IG5leHQoKSA6IHVuYXV0aG9yaXplZEVycm9yKHJlcywgbmV4dCk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIHVuYXV0aG9yaXplZEVycm9yKHJlcywgbmV4dCk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gSGVscGVyc1xyXG5cclxuZnVuY3Rpb24gaGFzQWNjZXNzVG9rZW4ocmVxKSB7XHJcbiAgaWYgKCFyZXEgJiYgIXJlcS5oZWFkZXJzKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGNvbnN0IGhlYWRlcnMgPSByZXEuaGVhZGVycztcclxuICBjb25zdCBhY2Nlc3NUb2tlbiA9IGhlYWRlcnNbJ2F1dGhvcml6YXRpb24nXTtcclxuICByZXR1cm4gYWNjZXNzVG9rZW4gPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVuYXV0aG9yaXplZEVycm9yKHJlcywgbmV4dCwgbWVzc2FnZSkge1xyXG4gIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKG1lc3NhZ2UgfHwgJ1VzZXIgdW5hdXRob3JpemVkJyk7XHJcbiAgcmVzLnN0YXR1cyg0MDEpO1xyXG4gIHJldHVybiBuZXh0KGVycm9yKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdmFsaWRhdGVBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlblNlcnZpY2UsIGFjY2Vzc1Rva2VuKSB7XHJcbiAgcmV0dXJuIGFjY2Vzc1Rva2VuU2VydmljZS5nZXRVc2VyQnlBY2Nlc3NUb2tlbihhY2Nlc3NUb2tlbilcclxuICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIGlmICh1c2VyICYmIHVzZXIuZ2V0KCkpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxufSBcclxuXHJcbm1vZHVsZS5leHBvcnRzLlJvdXRlTWlkZGxld2FyZSA9IFJvdXRlTWlkZGxld2FyZTsiXX0=