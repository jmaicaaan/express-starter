var Util;

Util = function() {};

Util.prototype.getAccessToken = function(req) {
  return getAccessTokenFromHeaders(req);
}

Util.prototype.unauthorizedError = function(res, message) {
  const error = createError(message || 'User unauthorized');
  res.status(401);
  return error;
}

// helpers

function createError(message) {
  const error = new Error(message);
  return error;
}

function getAccessTokenFromHeaders(req) {
  const headers = req.headers;
  const accessToken = headers['authorization'];
  return accessToken;
}

module.exports.Util = Util;