'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _index = require('./handlers/index');

function routes(app) {
  app.get('/', _index.introHandler);
  app.post('/user', _index.userHandler);
};