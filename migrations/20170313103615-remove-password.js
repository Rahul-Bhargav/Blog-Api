'use strict'

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.removeColumn('users', 'password')
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'users',
      'password',
      {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      }
    )
  }
}
