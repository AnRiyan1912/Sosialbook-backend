const authRoutes = require("./auth");
const productRoutes = require("./product");
const provinceRoutes = require("./province");
const cityRoutes = require("./city");
const productTypeRoutes = require("./producttype");
const productCategoryRoutes = require("./productcategory");
const postRoutes = require("./post");
const postLikeRoutes = require("./postlike");
const commentRoutes = require("./comment");
const messageRoutes = require("./message");
const imagePostRoutes = require("./imagepost");

const routers = {
  authRoutes,
  productRoutes,
  provinceRoutes,
  cityRoutes,
  productTypeRoutes,
  productCategoryRoutes,
  postRoutes,
  postLikeRoutes,
  commentRoutes,
  messageRoutes,
  imagePostRoutes,
};

module.exports = routers;
