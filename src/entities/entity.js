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
    db[this.model]
      .findByPk(req.params.id)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(404).send(err?.message));
  }
  create(req, res) {
    db[this.model]
      .create(...req.body)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err?.message));
  }
  deleteById(req, res) {
    db[this.model]
      .destroy({ where: { id: req.params.id } })
      .then(() => res.status(200).send("Delete success"))
      .catch((err) => res.status(500).send(err?.message));
  }
  updateById(req, res) {
    db[this.model]
      .update({ ...req.body }, { where: { id: req.params.id } })
      .then(() => this.getById(req, res))
      .catch((err) => res.status(500).send(err?.message));
  }
}

module.exports = Entity;
