const db = require("../sequelize/models");
const Entity = require("./entity");

class ImagePost extends Entity {
  constructor(model = "") {
    super(model);
  }
  async createImage(req, res) {
    try {
      if (req?.file?.filename) {
        req.body.image = req.file.filename;
        this.create(req, res);
      }
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  }

  async getImageWithUser(req, res) {
    try {
      await db.ImagePost.findAll({
        include: [{ model: db.Posts, as: "posts" }],
      })
        .then((result) => res.json({ status: 200, results: result }))
        .catch((err) => res.json({ status: 400, message: err?.message }));
    } catch (err) {
      res.json({ status: 500, message: err?.message });
    }
  }
}

module.exports = ImagePost;
