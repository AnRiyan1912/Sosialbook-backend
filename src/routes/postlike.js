const express = require("express");
const postLikeController = require("../controller/postlike-controller");
const route = express.Router();

route.get("/", postLikeController.getAll.bind(postLikeController));
route.get("/:id", postLikeController.getById.bind(postLikeController));
route.patch("/:id", postLikeController.updateById.bind(postLikeController));
route.delete("/:id", postLikeController.deleteById.bind(postLikeController));

module.exports = route;
