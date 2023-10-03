const express = require("express");
const cityController = require("../controller/city-controller");
const route = express.Router();

route.get("/", cityController.getAll.bind(cityController));
route.get(
  "/byprovince",
  cityController.getCityWithProvince.bind(cityController)
);
route.get("/:id", cityController.getById.bind(cityController));

module.exports = route;
