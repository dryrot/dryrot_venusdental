const { Sequelize } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "review",
    {
      title: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      create_dt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      update_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      show_yn: {
        type: DataTypes.STRING(2),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  Review.associate = (db) => {};
  return Review;
};
