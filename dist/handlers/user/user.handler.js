'use strict';

var _models = require('../../../models');

var models = _interopRequireWildcard(_models);

var _index = require('../../services/index');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var userService = new _index.UserService();

var UserHandler = function UserHandler() {};

UserHandler.prototype.addUser = function (req, res) {
  var username = req.body.username || 'Lorem Ipsum';
  var password = req.body.password;
  userService.addUser(username, password).then(function (user) {
    res.send(user);
  });
};

UserHandler.prototype.login = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;

  userService.login(username, password).then(function (user) {
    res.send(user);
  }).catch(function (err) {
    res.status(422).send(err);
  });
};

UserHandler.prototype.find = function (req, res) {
  userService.find().then(function (users) {
    res.send(users);
  });
};

module.exports.UserHandler = UserHandler;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9oYW5kbGVycy91c2VyL3VzZXIuaGFuZGxlci5qcyJdLCJuYW1lcyI6WyJtb2RlbHMiLCJ1c2VyU2VydmljZSIsIlVzZXJIYW5kbGVyIiwicHJvdG90eXBlIiwiYWRkVXNlciIsInJlcSIsInJlcyIsInVzZXJuYW1lIiwiYm9keSIsInBhc3N3b3JkIiwidGhlbiIsInNlbmQiLCJ1c2VyIiwibG9naW4iLCJjYXRjaCIsImVyciIsInN0YXR1cyIsImZpbmQiLCJ1c2VycyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0lBQVlBLE07O0FBQ1o7Ozs7QUFFQSxJQUFJQyxjQUFjLHdCQUFsQjs7QUFFQSxJQUFJQyxjQUFjLFNBQWRBLFdBQWMsR0FBVyxDQUFFLENBQS9COztBQUVBQSxZQUFZQyxTQUFaLENBQXNCQyxPQUF0QixHQUFnQyxVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDakQsTUFBSUMsV0FBV0YsSUFBSUcsSUFBSixDQUFTRCxRQUFULElBQXFCLGFBQXBDO0FBQ0EsTUFBSUUsV0FBV0osSUFBSUcsSUFBSixDQUFTQyxRQUF4QjtBQUNBUixjQUFZRyxPQUFaLENBQW9CRyxRQUFwQixFQUE4QkUsUUFBOUIsRUFDR0MsSUFESCxDQUNRLGdCQUFRO0FBQ1pKLFFBQUlLLElBQUosQ0FBU0MsSUFBVDtBQUNELEdBSEg7QUFJRCxDQVBEOztBQVNBVixZQUFZQyxTQUFaLENBQXNCVSxLQUF0QixHQUE4QixVQUFTUixHQUFULEVBQWNDLEdBQWQsRUFBbUI7QUFDL0MsTUFBSUMsV0FBV0YsSUFBSUcsSUFBSixDQUFTRCxRQUF4QjtBQUNBLE1BQUlFLFdBQVdKLElBQUlHLElBQUosQ0FBU0MsUUFBeEI7O0FBRUFSLGNBQVlZLEtBQVosQ0FBa0JOLFFBQWxCLEVBQTRCRSxRQUE1QixFQUNHQyxJQURILENBQ1EsZ0JBQVE7QUFDWkosUUFBSUssSUFBSixDQUFTQyxJQUFUO0FBQ0QsR0FISCxFQUlHRSxLQUpILENBSVMsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RULFFBQUlVLE1BQUosQ0FBVyxHQUFYLEVBQWdCTCxJQUFoQixDQUFxQkksR0FBckI7QUFDRCxHQU5IO0FBT0QsQ0FYRDs7QUFhQWIsWUFBWUMsU0FBWixDQUFzQmMsSUFBdEIsR0FBNkIsVUFBU1osR0FBVCxFQUFjQyxHQUFkLEVBQW1CO0FBQzlDTCxjQUFZZ0IsSUFBWixHQUNHUCxJQURILENBQ1EsVUFBQ1EsS0FBRCxFQUFXO0FBQ2ZaLFFBQUlLLElBQUosQ0FBU08sS0FBVDtBQUNELEdBSEg7QUFJRCxDQUxEOztBQU9BQyxPQUFPQyxPQUFQLENBQWVsQixXQUFmLEdBQTZCQSxXQUE3QiIsImZpbGUiOiJ1c2VyLmhhbmRsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBtb2RlbHMgZnJvbSAnLi4vLi4vLi4vbW9kZWxzJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbmRleCc7XHJcblxyXG52YXIgdXNlclNlcnZpY2UgPSBuZXcgVXNlclNlcnZpY2UoKTtcclxuXHJcbnZhciBVc2VySGFuZGxlciA9IGZ1bmN0aW9uKCkge307XHJcblxyXG5Vc2VySGFuZGxlci5wcm90b3R5cGUuYWRkVXNlciA9IGZ1bmN0aW9uKHJlcSwgcmVzKSB7XHJcbiAgbGV0IHVzZXJuYW1lID0gcmVxLmJvZHkudXNlcm5hbWUgfHwgJ0xvcmVtIElwc3VtJztcclxuICBsZXQgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcclxuICB1c2VyU2VydmljZS5hZGRVc2VyKHVzZXJuYW1lLCBwYXNzd29yZClcclxuICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICByZXMuc2VuZCh1c2VyKTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuVXNlckhhbmRsZXIucHJvdG90eXBlLmxvZ2luID0gZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICBsZXQgdXNlcm5hbWUgPSByZXEuYm9keS51c2VybmFtZTtcclxuICBsZXQgcGFzc3dvcmQgPSByZXEuYm9keS5wYXNzd29yZDtcclxuXHJcbiAgdXNlclNlcnZpY2UubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxyXG4gICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIHJlcy5zZW5kKHVzZXIpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgIHJlcy5zdGF0dXMoNDIyKS5zZW5kKGVycik7XHJcbiAgICB9KTtcclxufTtcclxuXHJcblVzZXJIYW5kbGVyLnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocmVxLCByZXMpIHtcclxuICB1c2VyU2VydmljZS5maW5kKClcclxuICAgIC50aGVuKCh1c2VycykgPT4ge1xyXG4gICAgICByZXMuc2VuZCh1c2Vycyk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzLlVzZXJIYW5kbGVyID0gVXNlckhhbmRsZXI7Il19