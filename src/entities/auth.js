const bcrypt = require("bcrypt");
const db = require("../sequelize/models");
const Entity = require("./entity");
const { Op } = require("sequelize");

class Auth extends Entity {
  constructor(model) {
    super(model);
  }

  login(req, res) {
    const { username, password } = req.body;
  }

  async register(req, res) {
    try {
      const saltRounds = 10;

      //check username if already
      const checkUsername = await db.Users.findAll({
        where: { username: { [Op.like]: `%${req.body.username}%` } },
      });
      if (checkUsername) {
        throw new Error("Username already exixt");
      }

      console.log(checkUsername, "ini username check");
      const hashPassword = await bcrypt.hash(req.body.password, saltRounds);

      await db.Users.create({
        ...req.body,
        password: hashPassword,
      })
        .then((result) => res.json({ status: 200, newUser: result }))
        .catch((err) => res.json({ status: 400, message: err?.message }));
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  }
}

module.exports = Auth;
