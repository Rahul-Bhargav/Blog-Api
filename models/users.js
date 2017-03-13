'use strict'
module.exports = function (sequelize, DataTypes) {
  var users = sequelize.define('users', {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last_name: {
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
