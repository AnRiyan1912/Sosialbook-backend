"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Users, { foreignKey: "user_id", as: "users" });

      Products.belongsTo(models.ProductCategories, {
        foreignKey: "category_id",
        as: "productcategories",
      });
    }
  }
  Products.init(
    {
      image_product: DataTypes.TEXT("LONG"),
      product_name: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
