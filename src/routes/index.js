const authRoutes = require("./auth");
const productRoutes = require("./product");
const provinceRoutes = require("./province");
const cityRoutes = require("./city");
const productTypeRoutes = require("./producttype");
const productCategoryRoutes = require("./productcategory");
const routers = {
  authRoutes,
  productRoutes,
  provinceRoutes,
  cityRoutes,
  productTypeRoutes,
  productCategoryRoutes,
};

module.exports = routers;
