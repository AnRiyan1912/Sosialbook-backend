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
    const { user, password } = req.body;
    try {
      db.Users.findOne({
        where: {
          [db.Sequelize.Op.or]: {
            email: { [db.Sequelize.Op.like]: `%${user}%` },
            username: { [db.Sequelize.Op.like]: `%${user}%` },
          },
        },
      }).then(async (result) => {
        const payload = {
          id: result.dataValues.id,
          is_verify: result.dataValues.is_verify,
        };
        const token = jwt.sign(payload, process.env.jwt_secret, {
          expiresIn: "1h",
        });
        delete result.dataValues.password;
        res.json({ status: 200, token: token, user: result });
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

  async keepLogin(req, res) {
    try {
      const { token } = req.query;
      console.log(token, "Ini token");
      const data = await jwt.verify(token, process.env.jwt_secret);
      console.log(data);
      if (!data.id) throw new Error("invalid token");

      console.log(data);

      const payload = await db.Users.findOne({
        where: {
          id: data.id,
        },
      });
      delete payload.dataValues.password;

      const newToken = jwt.sign(
        { id: data.id, is_verified: payload.dataValues.is_verified },
        process.env.jwt_secret,
        {
          expiresIn: "1h",
        }
      );

      return res.send({ token: newToken, user: payload });
    } catch (err) {
      res.status(500).send(err?.message);
    }
  }
}

module.exports = Auth;
