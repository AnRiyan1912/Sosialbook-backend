const express = require("express");
const messageController = require("../controller/message-controller");

const route = express.Router();

route.get("/", messageController.getAll.bind(messageController));
route.get("/:id", messageController.getById.bind(messageController));
route.patch("/:id", messageController.updateById.bind(messageController));
route.delete("/:id", messageController.deleteById.bind(messageController));

module.exports = route;
