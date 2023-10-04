const express = require("express");
const commentController = require("../controller/comment-controller");
const route = express.Router();

route.get("/", commentController.getAll.bind(commentController));
route.get("/:id", commentController.getById.bind(commentController));
route.patch("/:id", commentController.updateById.bind(commentController));
route.delete("/:id", commentController.deleteById.bind(commentController));

module.exports = route;
