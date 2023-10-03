"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductTypes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductTypes.hasMany(models.Products, {
        foreignKey: "type_id",
        as: "products",
      });

      ProductTypes.hasMany(models.ProductCategories, {
        foreignKey: "type_id",
        as: "productcategories",
      });
    }
  }
  ProductTypes.init(
    {
      type_name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductTypes",
    }
  );
  return ProductTypes;
};
