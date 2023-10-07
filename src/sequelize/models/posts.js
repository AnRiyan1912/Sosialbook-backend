"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Posts.belongsTo(models.Users, {
        foreignKey: "user_id",
        as: "users",
      });

      Posts.hasMany(models.PostLikes, {
        foreignKey: "post_id",
        as: "postlikes",
      });

      Posts.belongsTo(models.Provinces, {
        foreignKey: "province_id",
        as: "provinces",
      });

      Posts.belongsTo(models.City, {
        foreignKey: "city_id",
        as: "cities",
      });

      Posts.hasMany(models.Comments, {
        foreignKey: "post_id",
        as: "comments",
      });
    }
  }
  Posts.init(
    {
      image_post: DataTypes.TEXT("LONG"),
      caption: DataTypes.STRING,
      user_id: DataTypes.INTEGER,
      province_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};
