import models from '../../models';

const UserService = {
  addUser: (name) => {
    return models.User.create({ username: name });
  }
};

module.exports.UserService = UserService;