"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ImagePost extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      ImagePost.belongsTo(models.Posts, {
        foreignKey: "post_id",
        as: "posts",
      });
    }
  }
  ImagePost.init(
    {
      image: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ImagePost",
    }
  );
  return ImagePost;
};
