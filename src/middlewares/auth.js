const bycript = require("bcrypt");
const db = require("../sequelize/models");
const checkUserandPassword = async (req, res, next) => {
  try {
    const { user, password } = req.body;
    if (!user || !password) {
      throw new Error("Username or Email and Password can't be empty!");
    }

    await db.Users.findOne({
      where: {
        [db.Sequelize.Op.or]: {
          email: { [db.Sequelize.Op.like]: `%${user}%` },
          username: { [db.Sequelize.Op.like]: `%${user}%` },
        },
      },
    }).then(async (result) => {
      if (!result || !result.dataValues) {
        throw new Error("Username or Email not registered");
      } else if (result) {
        const isValid = await bycript.compare(
          password,
          result.dataValues.password
        );
        if (!isValid) {
          throw new Error("Wrong password!");
        }
      }
      next();
    });
  } catch (err) {
    res.json({ status: 400, message: err?.message });
  }
};

module.exports = checkUserandPassword;
