'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'followers',
      'userId',
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      }
    )
    queryInterface.changeColumn(
      'followers',
      'followerId',
      {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: {
          model: 'users',
          key: 'id',
          as: 'followerId'
        }
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'followers',
      'userId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      }
    )
    queryInterface.changeColumn(
      'followers',
      'followerId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id',
          as: 'followerId'
        }
      }
    )
  }
}
