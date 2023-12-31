const express = require("express");
const postController = require("../controller/post-controller");
const { fileUploader } = require("../middlewares/multer");
const route = express.Router();

route.get("/", postController.getAll.bind(postController));
route.get("/withuser", postController.getAllPostWithUser.bind(postController));
route.get("/:id", postController.getById.bind(postController));
route.patch("/:id", postController.updateById.bind(postController));
route.delete("/:id", postController.deleteById.bind(postController));

route.post("/", postController.create.bind(postController));

module.exports = route;
