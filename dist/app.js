'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _user = require('./routes/user.routes');

var _intro = require('./routes/intro.routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));

app.use('/', _intro.IntroRoutes);
app.use('/user', _user.UserRoutes);

module.exports = app;