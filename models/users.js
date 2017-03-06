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
    },
    password: {
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
        users.belongsToMany(models.users, {
          as: 'follower',
          through: 'followers',
          foreignKey: 'followerId'
        })
      }
    }
  })
  return users
}
