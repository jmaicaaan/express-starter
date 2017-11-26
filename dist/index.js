'use strict';

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;

_models2.default.sequelize.sync().then(function () {
  _app2.default.listen(port, function () {
    return console.log('App is listening on port ' + port);
  });
});