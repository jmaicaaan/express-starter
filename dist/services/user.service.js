'use strict';

var _models = require('../../models');

var _models2 = _interopRequireDefault(_models);

var _accessToken = require('./accessToken.service');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserService;

UserService = function UserService() {
  this.accessTokenService = new _accessToken.AccessTokenService();
};

UserService.prototype.addUser = function (username, password) {
  return _models2.default.User.create({ username: username, password: password });
};

UserService.prototype.login = function (username, password) {
  var _this = this;

  return _models2.default.User.findOne({ where: { username: username, password: password } }).then(function (user) {
    return _this.accessTokenService.addUserToken(user.id).then(function (accessToken) {
      user.get().accessToken = accessToken.get();
      return user;
    });
  }).then(function (user) {
    return user;
  });
};

UserService.prototype.find = function () {
  return _models2.default.User.find({ include: [_models2.default.accessToken] });
};

module.exports.UserService = UserService;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiXSwibmFtZXMiOlsiVXNlclNlcnZpY2UiLCJhY2Nlc3NUb2tlblNlcnZpY2UiLCJwcm90b3R5cGUiLCJhZGRVc2VyIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIlVzZXIiLCJjcmVhdGUiLCJsb2dpbiIsImZpbmRPbmUiLCJ3aGVyZSIsInRoZW4iLCJ1c2VyIiwiYWRkVXNlclRva2VuIiwiaWQiLCJhY2Nlc3NUb2tlbiIsImdldCIsImZpbmQiLCJpbmNsdWRlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBRUEsSUFBSUEsV0FBSjs7QUFFQUEsY0FBYyx1QkFBVztBQUN2QixPQUFLQyxrQkFBTCxHQUEwQixxQ0FBMUI7QUFDRCxDQUZEOztBQUlBRCxZQUFZRSxTQUFaLENBQXNCQyxPQUF0QixHQUFnQyxVQUFTQyxRQUFULEVBQW1CQyxRQUFuQixFQUE2QjtBQUMzRCxTQUFPLGlCQUFPQyxJQUFQLENBQVlDLE1BQVosQ0FBbUIsRUFBRUgsa0JBQUYsRUFBWUMsa0JBQVosRUFBbkIsQ0FBUDtBQUNELENBRkQ7O0FBSUFMLFlBQVlFLFNBQVosQ0FBc0JNLEtBQXRCLEdBQThCLFVBQVNKLFFBQVQsRUFBbUJDLFFBQW5CLEVBQTZCO0FBQUE7O0FBQ3pELFNBQU8saUJBQU9DLElBQVAsQ0FBWUcsT0FBWixDQUFvQixFQUFFQyxPQUFPLEVBQUVOLGtCQUFGLEVBQVlDLGtCQUFaLEVBQVQsRUFBcEIsRUFDSk0sSUFESSxDQUNDLFVBQUNDLElBQUQsRUFBVTtBQUNkLFdBQU8sTUFBS1gsa0JBQUwsQ0FBd0JZLFlBQXhCLENBQXFDRCxLQUFLRSxFQUExQyxFQUNKSCxJQURJLENBQ0MsVUFBQ0ksV0FBRCxFQUFpQjtBQUNyQkgsV0FBS0ksR0FBTCxHQUFXRCxXQUFYLEdBQXlCQSxZQUFZQyxHQUFaLEVBQXpCO0FBQ0EsYUFBT0osSUFBUDtBQUNELEtBSkksQ0FBUDtBQUtELEdBUEksRUFRSkQsSUFSSSxDQVFDLFVBQUNDLElBQUQ7QUFBQSxXQUFVQSxJQUFWO0FBQUEsR0FSRCxDQUFQO0FBU0QsQ0FWRDs7QUFZQVosWUFBWUUsU0FBWixDQUFzQmUsSUFBdEIsR0FBNkIsWUFBVztBQUN0QyxTQUFPLGlCQUFPWCxJQUFQLENBQVlXLElBQVosQ0FBaUIsRUFBRUMsU0FBUyxDQUFFLGlCQUFPSCxXQUFULENBQVgsRUFBakIsQ0FBUDtBQUNELENBRkQ7O0FBSUFJLE9BQU9DLE9BQVAsQ0FBZXBCLFdBQWYsR0FBNkJBLFdBQTdCIiwiZmlsZSI6InVzZXIuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2RlbHMgZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgQWNjZXNzVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi9hY2Nlc3NUb2tlbi5zZXJ2aWNlJztcclxuXHJcbnZhciBVc2VyU2VydmljZTtcclxuXHJcblVzZXJTZXJ2aWNlID0gZnVuY3Rpb24oKSB7XHJcbiAgdGhpcy5hY2Nlc3NUb2tlblNlcnZpY2UgPSBuZXcgQWNjZXNzVG9rZW5TZXJ2aWNlKCk7XHJcbn07XHJcblxyXG5Vc2VyU2VydmljZS5wcm90b3R5cGUuYWRkVXNlciA9IGZ1bmN0aW9uKHVzZXJuYW1lLCBwYXNzd29yZCkge1xyXG4gIHJldHVybiBtb2RlbHMuVXNlci5jcmVhdGUoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSk7XHJcbn07XHJcblxyXG5Vc2VyU2VydmljZS5wcm90b3R5cGUubG9naW4gPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpIHtcclxuICByZXR1cm4gbW9kZWxzLlVzZXIuZmluZE9uZSh7IHdoZXJlOiB7IHVzZXJuYW1lLCBwYXNzd29yZCB9fSlcclxuICAgIC50aGVuKCh1c2VyKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmFjY2Vzc1Rva2VuU2VydmljZS5hZGRVc2VyVG9rZW4odXNlci5pZClcclxuICAgICAgICAudGhlbigoYWNjZXNzVG9rZW4pID0+IHtcclxuICAgICAgICAgIHVzZXIuZ2V0KCkuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbi5nZXQoKTtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCh1c2VyKSA9PiB1c2VyKTtcclxufTtcclxuXHJcblVzZXJTZXJ2aWNlLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24oKSB7XHJcbiAgcmV0dXJuIG1vZGVscy5Vc2VyLmZpbmQoeyBpbmNsdWRlOiBbIG1vZGVscy5hY2Nlc3NUb2tlbiBdIH0pO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMuVXNlclNlcnZpY2UgPSBVc2VyU2VydmljZTsiXX0=