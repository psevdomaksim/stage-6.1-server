const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Post = sequelize.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("draft", "published"),
    allowNull: false,
  },
  additionalText: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  additionalSelect: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tasks: {
    type: DataTypes.JSONB,
    allowNull: true,
    defaultValue: [],
  },
});

module.exports = Post;
