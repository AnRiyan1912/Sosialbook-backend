const express = require("express");
const productCategoryController = require("../controller/productcategory-controller");
const route = express.Router();

route.get(
  "/",
  productCategoryController.getAll.bind(productCategoryController)
);
route.get(
  "/byproducttype",
  productCategoryController.getProdutcCategoryByProductType.bind(
    productCategoryController
  )
);
route.get(
  "/:id",
  productCategoryController.getById.bind(productCategoryController)
);

module.exports = route;
