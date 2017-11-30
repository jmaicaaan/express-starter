'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./handlers/index');

var _routeAcl = require('./route.acl.json');

var _routeAcl2 = _interopRequireDefault(_routeAcl);

var _route = require('./middlewares/route.middleware');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var userHandler = new _index.UserHandler();
var routeMiddleware = new _route.RouteMiddleware();

router.get('/', _index.introHandler);

/**
 * Preseving the context `this`
 * 
 * When a function is passed as an argument(eg: callback)
 * its context is lost. In order to preseve the context of 
 * the function you can do a closure technique as 
 * illustrated below in the acl middleware.
 */

router.use(function (req, res, next) {
  return routeMiddleware.acl(req, res, next);
});

router.get('/user', userHandler.find);
router.post('/user', userHandler.addUser);
router.post('/user/login', userHandler.login);

module.exports.router = router;