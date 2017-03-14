'use strict'
module.exports = function (sequelize, DataTypes) {
  var UserAuthentication = sequelize.define('userauthentications', {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })
  return UserAuthentication
}
