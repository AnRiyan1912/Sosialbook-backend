const authRoutes = require("./auth");
const productRoutes = require("./product")
const provinceRoutes = require("./province")
const cityRoutes = require("./city")

const routers = {
  authRoutes,
  productRoutes,
  provinceRoutes,
  cityRoutes
};

module.exports = routers;
