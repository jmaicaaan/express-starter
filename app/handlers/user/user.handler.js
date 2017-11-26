import * as models from '../../../models';
import { UserService } from '../../services/user.service';

const addUser = (req, res) => {
  let name = req.body.name || 'Lorem Ipsum';
  
  UserService.addUser(name)
    .then(user => {
      res.send(user);
    });
};

const login = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  UserService.login(username, password)
    .then(user => {
      res.send(user);
    });
};

module.exports.userHandler = {
  addUser,
  login
};