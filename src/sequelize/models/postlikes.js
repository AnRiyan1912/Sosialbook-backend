"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PostLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PostLikes.belongsTo(models.Users, { foreignKey: "user_id", as: "users" });

      PostLikes.belongsTo(models.Posts, { foreignKey: "post_id", as: "post" });
    }
  }
  PostLikes.init(
    {
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PostLikes",
    }
  );
  return PostLikes;
};
