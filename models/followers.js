'use strict'
module.exports = function (sequelize, DataTypes) {
  var followers = sequelize.define('followers', {})
  return followers
}
