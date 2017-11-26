import models from '../../models';

const UserService = {
  addUser: (name) => {
    return models.User.create({ username: name });
  },
  login: (username, password) => { // create access token using service
    return models.User.findOne({ where: { username, password }})
      .then((user) => filterProperties(user))
      .then((user) => user);
  }
};

/** private methods */

function find() {
  return models.User.find();
}

function filterProperties(user) {
  if (user && user.dataValues) {
    delete user.dataValues.password;
  }
  return user;
}

module.exports.UserService = UserService;