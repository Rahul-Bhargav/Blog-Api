'use strict'
module.exports = function (sequelize, DataTypes) {
  const followers = sequelize.define('followers', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id',
        as: 'userId'
      }
    },
    followerId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id',
        as: 'followerId'
      }
    }
  })
  return followers
}
