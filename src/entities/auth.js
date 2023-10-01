const bcrypt = require("bcrypt");
const db = require("../sequelize/models");
const Entity = require("./entity");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");
require("dotenv").config();

class Auth extends Entity {
  constructor(model) {
    super(model);
  }

  async login(req, res) {
    const { username, email, password } = req.body;
    try {
      await db.Users.findOne({
        where: {
          [db.Sequelize.Op.or]: {
            email: { [db.Sequelize.Op.like]: `%${email}` },
            username: { [db.Sequelize.Op.like]: `%${username}%` },
          },
        },
      }).then(async (result) => {
        if (result.dataValues) {
          const isValid = await bcrypt.compare(
            password,
            result.dataValues.password
          );

          if (!isValid) {
            throw new Error("Wrong passowrd!");
          }
          const payload = {
            id: result.dataValues.id,
            is_verify: result.dataValues.is_verify,
          };
          const token = jwt.sign(payload, process.env.jwt_secret);
          delete result.dataValues.password;
          res.json({ status: 200, token: token, user: result });
        }
      });
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  }

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
