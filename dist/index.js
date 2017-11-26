'use strict';

var _app = require('./app.js');

var _app2 = _interopRequireDefault(_app);

var _models = require('../models');

var models = _interopRequireWildcard(_models);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 3000;
_app2.default.set('port', port);

models.sequelize.sync().then(function () {
  _app2.default.listen(port, function () {
    return console.log('App is listening on port ' + port);
  });
});