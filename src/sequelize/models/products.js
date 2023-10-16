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

      Products.belongsTo(models.City, {
        foreignKey: "city_id",
        as: "cities",
      });

      Products.belongsTo(models.Provinces, {
        foreignKey: "province_id",
        as: "provinces",
      });

      Products.belongsTo(models.ProductTypes, {
        foreignKey: "type_id",
        as: "producttypes",
      });
    }
  }
  Products.init(
    {
      image_product: DataTypes.TEXT("LONG"),
      product_name: DataTypes.STRING,
      price: DataTypes.INTEGER,
      description: DataTypes.STRING,
      type_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
      province_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Products",
    }
  );
  return Products;
};
