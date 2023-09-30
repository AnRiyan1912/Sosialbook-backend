"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comments.belongsTo(models.Users, { foreignKey: "user_id", as: "users" });

      Comments.belongsTo(models.Posts, { foreignKey: "post_id", as: "posts" });
    }
  }
  Comments.init(
    {
      comment: DataTypes.STRING,
      post_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Comments",
    }
  );
  return Comments;
};
