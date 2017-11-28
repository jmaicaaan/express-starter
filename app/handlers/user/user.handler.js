import * as models from '../../../models';
import { UserService } from '../../services/user.service';

var userService = new UserService();

var UserHandler = () => {};

UserHandler.prototype.addUser = (req, res) => {
  let username = req.body.username || 'Lorem Ipsum';
  let password = req.body.password;
  userService.addUser(username, password)
    .then(user => {
      res.send(user);
    });
};

UserHandler.prototype.login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  userService.login(username, password)
    .then(user => {
      res.send(user);
    });
};

UserHandler.prototype.find = (req, res) => {
  userService.find()
    .then((data) => {      
      res.send(data.get());
    });
};

module.exports.userHandler = UserHandler;
module.exports.UserHandler = UserHandler;