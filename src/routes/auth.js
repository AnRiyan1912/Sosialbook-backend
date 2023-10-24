const express = require("express");
const authController = require("../controller/auth-controller");
const checkUserandPassword = require("../middlewares/auth");
const { blopUploader } = require("../middlewares/multer");
const route = express.Router();

route.get("/", authController.getAll.bind(authController));
route.get("/token", authController.keepLogin.bind(authController)); //keeplogin
route.get(
  "/renderimage/:id",
  authController.renderImageUser.bind(authController)
);
route.post(
  "/login",
  checkUserandPassword,
  authController.login.bind(authController)
);
route.get("/:id", authController.getById.bind(authController));
route.delete("/:id", authController.deleteById.bind(authController));
route.patch(
  "/:id",
  blopUploader({ fileType: "image" }).single("image"),
  authController.editUser.bind(authController)
);
route.post("/register", authController.register.bind(authController));

module.exports = route;
