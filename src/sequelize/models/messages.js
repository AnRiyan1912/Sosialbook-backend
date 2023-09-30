"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Messages.belongsTo(models.Users, {
        foreignKey: "user_sender_id",
        as: "user_senders",
      });

      Messages.belongsTo(models.Users, {
        foreignKey: "user_receiver_id",
        as: "user_receivers",
      });
    }
  }
  Messages.init(
    {
      message: DataTypes.STRING,
      user_sender_id: DataTypes.INTEGER,
      user_receiver_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Messages",
    }
  );
  return Messages;
};
