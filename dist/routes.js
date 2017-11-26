'use strict';

var _index = require('./handlers/index');

module.exports.routes = function (app) {
  app.get('/', _index.introHandler);
  app.post('/user', _index.userHandler.addUser);
  app.post('/user/login', _index.userHandler.login);
};