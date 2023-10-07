"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Provinces extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Provinces.hasMany(models.Products, {
        foreignKey: "province_id",
        as: "products",
      });

      Provinces.hasMany(models.City, {
        foreignKey: "province_id",
        as: "cities",
      });

      Provinces.hasMany(models.Posts, {
        foreignKey: "province_id",
        as: "posts",
      });
    }
  }
  Provinces.init(
    {
      province_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Provinces",
    }
  );
  return Provinces;
};
