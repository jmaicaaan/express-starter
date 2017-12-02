import * as models from '../../../models';
import { UserService } from '../../services/index';

var userService = new UserService();

var UserHandler = function() {};

UserHandler.prototype.addUser = function(req, res) {
  let username = req.body.username || 'Lorem Ipsum';
  let password = req.body.password;
  userService.addUser(username, password)
    .then(user => {
      res.send(user);
    });
};

UserHandler.prototype.login = function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  userService.login(username, password)
    .then(user => {
      res.send(user);
    })
    .catch((err) => {
      res.status(422).send(err);
    });
};

UserHandler.prototype.find = function(req, res) {
  userService.find()
    .then((data) => {      
      res.send(data.get());
    });
};

module.exports.UserHandler = UserHandler;