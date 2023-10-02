"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Users = require("./users")(sequelize, Sequelize);
db.Products = require("./products")(sequelize, Sequelize);
db.ProductCategories = require("./productcategories")(sequelize, Sequelize);
db.Posts = require("./posts")(sequelize, Sequelize);
db.PostLikes = require("./postlikes")(sequelize, Sequelize);
db.Messages = require("./messages")(sequelize, Sequelize);
db.Comments = require("./comments")(sequelize, Sequelize);
db.City = require("./city")(sequelize, Sequelize);
db.Provinces = require("./provinces")(sequelize, Sequelize);
db.ProductTypes = require("./producttypes")(sequelize, Sequelize);

db.Users.associate(db);
db.Products.associate(db);
db.ProductCategories.associate(db);
db.Posts.associate(db);
db.PostLikes.associate(db);
db.Messages.associate(db);
db.Comments.associate(db);
db.City.associate(db);
db.Provinces.associate(db);
db.ProductTypes.associate(db);

module.exports = db;
