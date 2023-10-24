"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Products, { foreignKey: "user_id", as: "products" });

      Users.hasMany(models.Posts, { foreignKey: "user_id", as: "posts" });

      Users.hasMany(models.Comments, { foreignKey: "user_id", as: "comments" });

      Users.hasMany(models.PostLikes, {
        foreignKey: "user_id",
        as: "postlikes",
      });

      Users.hasMany(models.Messages, {
        foreignKey: "user_sender_id",
        as: "message_senders",
      });
      Users.hasMany(models.Messages, {
        foreignKey: "user_receiver_id",
        as: "message_receivers",
      });
    }
  }
  Users.init(
    {
      image: { type: DataTypes.STRING },
      username: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      firstname: DataTypes.STRING,
      lastname: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      age: DataTypes.INTEGER,
      date_of_birth: DataTypes.DATE,
      bio: DataTypes.STRING,
      is_verify: { type: DataTypes.BOOLEAN, defaultValue: false },
      is_attemp: { type: DataTypes.INTEGER, defaultValue: 0 },
      image_user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return Users;
};
