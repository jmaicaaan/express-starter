'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('../handlers/index');

var _route = require('../middlewares/route.middleware');

var _introRoutes = require('./intro.routes.json');

var _introRoutes2 = _interopRequireDefault(_introRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IntroRoutes = _express2.default.Router();

var introHandler = new _index.IntroHandler();
var routeMiddleware = new _route.RouteMiddleware();

IntroRoutes.get('/', introHandler.intro);

module.exports.IntroRoutes = IntroRoutes;