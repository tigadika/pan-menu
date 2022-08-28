const { Menu } = require("../models");

module.exports = class Controller {
  static async getMenusById(req, res, next) {}
  static async addMenuById(req, res, next) {
    try {
      const { title, description, price, image } = req.body;

      const newMenu = new Menu({
        title,
        description,
        price: +price,
        image,
      });

      const data = await newMenu.save();

      res.status(201).json({
        code: 201,
        message: `Success adding ${data.title}`,
      });
    } catch (error) {
      next(error);
    }
  }
};
