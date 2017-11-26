import * as models from '../../../models';
import { UserService } from '../../services/user.service';

module.exports.userHandler = (req, res) => {
  let name = req.body.name || 'Lorem Ipsum';

  UserService.addUser(name)
    .then(user => {
      res.send('Hello');
    });
};
