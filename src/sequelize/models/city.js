"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      City.hasMany(models.Products, {
        foreignKey: "city_name",
        as: "products",
      });

      City.belongsTo(models.Provinces, {
        foreignKey: "province_id",
        as: "provinces",
      });

      City.hasMany(models.Posts, {
        foreignKey: "city_id",
        as: "posts",
      });
    }
  }
  City.init(
    {
      city_name: DataTypes.STRING,
      province_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "City",
    }
  );
  return City;
};
