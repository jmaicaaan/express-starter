'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var models = require('../../../models');

function userHandler(req, res) {
  var name = req.body.name || 'Lorem Ipsum';
  addUser(name).then(function (user) {
    res.send('Hello ' + user.username);
  });
}

function addUser(name) {
  return models.User.create({
    username: name
  });
}

exports.userHandler = userHandler;