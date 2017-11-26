'use strict';
module.exports = (sequelize, DataTypes) => {
  var accessToken = sequelize.define('accessToken', {
    token: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  accessToken.associate = (models) => {
    models.accessToken.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return accessToken;
};