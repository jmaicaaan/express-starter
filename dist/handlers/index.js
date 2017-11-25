'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _intro = require('./intro/intro.handler');

Object.keys(_intro).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _intro[key];
    }
  });
});

var _user = require('./user/user.handler');

Object.keys(_user).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _user[key];
    }
  });
});