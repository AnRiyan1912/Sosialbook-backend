const bcrypt = require("bcrypt");
const db = require("../sequelize/models");
const Entity = require("./entity");
const { Op } = require("sequelize");

class Auth extends Entity {
  constructor(model) {
    super(model);
  }

  login(req, res) {}

  async register(req, res) {
    try {
      //check username if already
      const checkUsername = await db.Users.findOne({
        where: { username: req.body.username },
      });
      //check email user can use one email for one user
      const checkEmail = await db.Users.findOne({
        where: { email: req.body.email },
      });
      //conditional
      if (checkUsername?.username) {
        throw new Error("Username already exixt");
      } else if (checkEmail?.email) {
        throw new Error("Email already use");
      }

      const saltRounds = 10;
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
