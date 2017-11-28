'use strict';

var _index = require('./handlers/index');

var userHandler = new _index.UserHandler();

module.exports.routes = function (app) {
  app.get('/', _index.introHandler);
  app.post('/user', userHandler.addUser);
  app.post('/user/login', userHandler.login);
  app.get('/user', userHandler.find);
};