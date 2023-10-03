const db = require("../sequelize/models");
const Entity = require("./entity");

class Province extends Entity {
  constructor(model) {
    super(model);
  }
  async getProvinceWithCity(req, res) {
    const { province_id } = req.query;
    await db.Provinces.findAll({
      where: { id: province_id },
      include: [
        { model: db.City, as: "cities", where: { province_id: province_id } },
      ],
    }).then((results) =>
      res.json({ status: 200, message: "success", results })
    );
  }
}

module.exports = Province;
