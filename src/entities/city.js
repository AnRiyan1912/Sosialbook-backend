const db = require("../sequelize/models");
const Entity = require("./entity");

class City extends Entity {
  constructor(model) {
    super(model);
  }
  async getCityWithProvince(req, res) {
    const { province_id } = req.query;

    await db.City.findAll({ where: { province_id: province_id } })
      .then((results) => res.json({ status: 200, message: "success", results }))
      .catch((err) => res.json({ status: 400, message: err?.message }));
  }
}

module.exports = City;
