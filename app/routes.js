import { introHandler, UserHandler } from './handlers/index';

var userHandler = new UserHandler();

module.exports.routes = (app) => {
  app.get('/', introHandler);
  app.post('/user', userHandler.addUser);
  app.post('/user/login', userHandler.login);
  app.get('/user', userHandler.find);
};