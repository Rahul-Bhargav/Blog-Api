'use strict'
module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.TEXT
      },
      likes: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      visibility: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      publishDate: Sequelize.DATE,
      images: {
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      }
    })
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('posts')
  }
}
