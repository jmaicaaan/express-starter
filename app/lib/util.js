var Util;

Util = function() {};

Util.prototype.getAccessToken = function(req) {
  return getAccessTokenFromHeaders(req);
}

Util.prototype.unauthorizedError = function(message) {
  const error = createError(message || 'User unauthorized', 'USER_UNAUTHORIZED');
  return error;
}

Util.prototype.invalidLoginError = function(message) {
  const error = createError(message || 'Invalid login credentials', 'INVALID_LOGIN_CREDENTIALS');
  return error;
}

// helpers

function createError(message, name) {
  const error = new Error(message);
  error.name = name;
  return error;
}

function getAccessTokenFromHeaders(req) {
  const headers = req.headers;
  const accessToken = headers['authorization'];
  return accessToken;
}

module.exports.Util = Util;