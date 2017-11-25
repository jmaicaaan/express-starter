const models = require('../../../models');

function userHandler(req, res) {
  let name = req.body.name || 'Lorem Ipsum';
  addUser(name).then((user) => {
    res.send(`Hello ${user.username}`);
  });
}

function addUser(name) {
  return models.User.create({
    username: name
  });
}

export { userHandler } 