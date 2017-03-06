'use strict'
module.exports = function (sequelize, DataTypes) {
  const posts = sequelize.define('posts', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    visibility: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    publishDate: DataTypes.DATE,
    images: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    }
  }, {
    classMethods: {
      associate: function (models) {
        posts.belongsTo(models.users, {
          foreignKey: 'userId',
          onDelete: 'CASCADE'
        })
      }
    }
  })
  return posts
}
