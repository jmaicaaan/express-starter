'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _index = require('./routes/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _bodyParser.json)());
app.use((0, _bodyParser.urlencoded)({ extended: false }));

app.use('/', _index.IntroRoutes);
app.use('/user', _index.UserRoutes);

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwidXNlIiwiZXh0ZW5kZWQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLHdCQUFaOztBQUVBQSxJQUFJQyxHQUFKLENBQVEsdUJBQVI7QUFDQUQsSUFBSUMsR0FBSixDQUFRLDRCQUFXLEVBQUVDLFVBQVUsS0FBWixFQUFYLENBQVI7O0FBRUFGLElBQUlDLEdBQUosQ0FBUSxHQUFSO0FBQ0FELElBQUlDLEdBQUosQ0FBUSxPQUFSOztBQUVBRSxPQUFPQyxPQUFQLEdBQWlCSixHQUFqQiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsganNvbiwgdXJsZW5jb2RlZCB9IGZyb20gJ2JvZHktcGFyc2VyJztcclxuaW1wb3J0IHsgSW50cm9Sb3V0ZXMsIFVzZXJSb3V0ZXMgfSBmcm9tICcuL3JvdXRlcy9pbmRleCc7XHJcblxyXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XHJcblxyXG5hcHAudXNlKGpzb24oKSk7XHJcbmFwcC51c2UodXJsZW5jb2RlZCh7IGV4dGVuZGVkOiBmYWxzZSB9KSk7XHJcblxyXG5hcHAudXNlKCcvJywgSW50cm9Sb3V0ZXMpO1xyXG5hcHAudXNlKCcvdXNlcicsIFVzZXJSb3V0ZXMpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcHA7Il19