const db = require("../sequelize/models");
const Entity = require("./entity");

class Post extends Entity {
  constructor(model) {
    super(model);
  }
  async getAllPostWithUser(req, res) {
    try {
      await db.Posts.findAll({
        include: [
          { model: db.Users, as: "users" },
          { model: db.ImagePost, as: "imageposts" },
        ],
      })
        .then((result) => res.json({ status: 200, posts: result }))
        .catch((err) => res.json({ status: 500, message: err?.message }));
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  }
}

module.exports = Post;
