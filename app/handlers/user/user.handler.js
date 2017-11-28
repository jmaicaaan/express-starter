import * as models from '../../../models';
import { UserService } from '../../services/user.service';

var userService = new UserService();

const addUser = (req, res) => {
  let username = req.body.username || 'Lorem Ipsum';
  let password = req.body.password;
  userService.addUser(username, password)
    .then(user => {
      res.send(user);
    });
};

const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  userService.login(username, password)
    .then(user => {
      res.send(user);
    });
};

const find = (req, res) => {
  userService.find()
    .then((data) => {      
      res.send(data.get());
    });
}

module.exports.userHandler = {
  addUser,
  login,
  find
};