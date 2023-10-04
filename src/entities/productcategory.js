const db = require("../sequelize/models");
const Entity = require("./entity");

class ProductCategory extends Entity {
  constructor(model) {
    super(model);
  }
  async getProdutcCategoryByProductType(req, res) {
    const { producttype_id } = req.query;

    await db.ProductCategories.findAll({
      where: { type_id: producttype_id },
    })
      .then((results) => res.json({ status: 200, message: "success", results }))
      .catch((err) => res.json({ status: 400, message: err?.message }));
  }
}

module.exports = ProductCategory;
