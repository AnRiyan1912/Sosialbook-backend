const express = require("express");
const provinceController = require("../controller/province-controller");
const route = express.Router();

route.get("/", provinceController.getAll.bind(provinceController));
route.get(
  "/withcity",
  provinceController.getProvinceWithCity.bind(provinceController)
);
route.get("/:id", provinceController.getById.bind(provinceController));

module.exports = route;
