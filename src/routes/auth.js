const express = require("express");
const authController = require("../controller/auth-controller");
const route = express.Router();

route.get("/", authController.getAll.bind(authController));
route.get("/:id", authController.getById.bind(authController));
route.post("/register", authController.register.bind(authController));

module.exports = route;
