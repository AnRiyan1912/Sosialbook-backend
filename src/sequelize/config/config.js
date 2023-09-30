require("dotenv").config();
const {
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
  MYSQL_HOST,
  MYSQL_DIALECT,
} = process.env;

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "Sosialbook",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
