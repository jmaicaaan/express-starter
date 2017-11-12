import { helloWorldHandler } from './handlers/index';

export function routes(app) {
  app.get('/', helloWorldHandler);
};