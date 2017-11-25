import { introHandler, userHandler } from './handlers/index';

export function routes(app) {
  app.get('/', introHandler);
  app.post('/user', userHandler);
};