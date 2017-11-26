import { introHandler, userHandler } from './handlers/index';

module.exports.routes = (app) => {
  app.get('/', introHandler);
  app.post('/user', userHandler);
};