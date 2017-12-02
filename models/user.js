'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  });

  User.associate = (models) => {
    // add association here for the user
    models.User.hasMany(models.accessToken);
  };

  User.Instance.prototype._retrieve = function() {
    var values = Object.assign({}, this.get());

    delete values.password;
    return values;
  }

  return User;
};