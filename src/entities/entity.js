const db = require("../sequelize/models");

class Entity {
  constructor(model = "") {
    this.model = model;
  }
  getAll(req, res) {
    db[this.model]
      .findAll()
      .then((result) => res.status(200).send(result))
      .catch((err) => res.send(err?.message));
  }
  getById(req, res) {
    const { id } = req.params.id;
    db[this.model]
      .findByPk(id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(404).send(err?.message));
  }
}

module.exports = Entity;
