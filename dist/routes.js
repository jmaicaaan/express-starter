'use strict';

var _index = require('./handlers/index');

// export function routes(app) {
//   app.get('/', introHandler);
//   app.post('/user', userHandler);
// };

module.exports.routes = function (app) {
  app.get('/', _index.introHandler);
  app.post('/user', _index.userHandler);
};