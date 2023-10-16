const db = require("../sequelize/models");
const Entity = require("./entity");

class Product extends Entity {
  constructor(model) {
    super(model);
  }

  async getProductSpesific(req, res) {
    await db.Products.findAll({
      include: [
        { model: db.Users, as: "users" },
        { model: db.ProductTypes, as: "producttypes" },
        { model: db.ProductCategories, as: "productcategories" },
        { model: db.Provinces, as: "provinces" },
        { model: db.City, as: "cities" },
      ],
    })
      .then((result) => res.json({ status: 200, results: result }))
      .catch((err) => res.json({ status: 200, message: err?.message }));
  }
}

module.exports = Product;
