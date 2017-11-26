import models from '../../models';

const UserService = {
  addUser: (name) => {
    return models.User.create({ username: name });
  },
  login: (username, password) => { // create access token using service
    return models.User.findOne({ where: { username, password }})
      .then((user) => user);
  }
};

/** private methods */

function find() {
  return models.User.find();
}

module.exports.UserService = UserService;