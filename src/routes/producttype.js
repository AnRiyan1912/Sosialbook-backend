const express = require("express");
const productTypeController = require("../controller/producttype-controller");
const route = express.Router();

route.get("/", productTypeController.getAll.bind(productTypeController));
route.get("/:id", productTypeController.getById.bind(productTypeController));

module.exports = route;
