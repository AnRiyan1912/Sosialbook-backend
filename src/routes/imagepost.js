const express = require("express");
const imagePostController = require("../controller/image_post_controller");
const { fileUploader } = require("../middlewares/multer");
const route = express.Router();

route.get("/", imagePostController.getImageWithUser.bind(imagePostController));
route.post(
  "/",
  fileUploader({
    destinationFolder: "posts",
    prefix: "POST",
    fileType: "image",
  }).single("image"),
  imagePostController.createImage.bind(imagePostController)
);

module.exports = route;
