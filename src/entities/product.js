const Auth = require("./auth");

class Product extends Auth {
  constructor(model) {
    super(model);
  }
}

module.exports = Product;
