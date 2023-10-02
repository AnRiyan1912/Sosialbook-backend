const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 2000;
const cors = require("cors");
const routers = require("./routes");
const db = require("./sequelize/models");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to my api");
});

app.use("/auth", routers.authRoutes);
app.use("/product", routers.productRoutes)
app.use("/province", routers.provinceRoutes)
app.use("/city", routers.cityRoutes);


app.listen(PORT, () => {
  console.log(`Your server running at port ${PORT}`);
  // db.sequelize.sync({ alter: true });
  // db.sequelize.sync({ force: true });
});
