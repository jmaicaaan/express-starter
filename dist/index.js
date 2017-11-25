'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _bodyParser = require('body-parser');

var _routes = require('./routes');

var _models = require('../models');

var _models2 = _interopRequireDefault(_models);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));
(0, _routes.routes)(app);

_models2.default.sequelize.sync().then(function () {
  app.listen(port, function () {
    return console.log('App is listening on port ' + port);
  });
});

module.exports = app;