'use strict';
module.exports = (sequelize, DataTypes) => {
  var Task = sequelize.define('Task', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  Task.associate = (models) => {
    models.Task.belongsTo(models.User, {
      onDelete: 'CASCADE', 
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Task;
};