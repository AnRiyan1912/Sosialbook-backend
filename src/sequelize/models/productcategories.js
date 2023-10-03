"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductCategories.hasMany(models.Products, {
        foreignKey: "category_id",
        as: "products",
      });

      ProductCategories.belongsTo(models.ProductTypes, {
        foreignKey: "type_id",
        as: "producttypes",
      });
    }
  }
  ProductCategories.init(
    {
      category_name: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "ProductCategories",
    }
  );
  return ProductCategories;
};
