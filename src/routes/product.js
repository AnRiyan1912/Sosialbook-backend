const express = require("express");
const productController = require("../controller/product-controller");
const route = express.Router();

route.get("/", productController.getAll.bind(productController));
route.get("/:id", productController.getById.bind(productController));
route.patch("/:id", productController.updateById.bind(productController));
route.delete("/:id", productController.deleteById.bind(productController));

module.exports = route;
