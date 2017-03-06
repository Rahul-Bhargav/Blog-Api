'use strict'
module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    nickname: {
      type: DataTypes.STRING,
      defaultValue: 'anonymous'
    },
    passowrd: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    classMethods: {
      associate: function (models) {
        users.hasMany(models.posts, {
          foreignkey: 'userId',
          as: 'posts'
        })
      }
    }
  })
  return users
}
