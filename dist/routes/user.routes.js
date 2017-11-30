'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../handlers/index');

var _route = require('../middlewares/route.middleware');

var _userRoutes = require('./user.routes.json');

var _userRoutes2 = _interopRequireDefault(_userRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserRoutes = _express2.default.Router();

var userHandler = new _index.UserHandler();
var routeMiddleware = new _route.RouteMiddleware();

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

UserRoutes.use(function (req, res, next) {
  var routes = _userRoutes2.default.authorized;
  routeMiddleware.acl(req, res, next, routes);
});

UserRoutes.get('/', userHandler.find);
UserRoutes.post('/', userHandler.addUser);
UserRoutes.post('/login', userHandler.login);

module.exports.UserRoutes = UserRoutes;