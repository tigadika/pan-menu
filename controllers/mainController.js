const { Menu, User } = require("../models");

module.exports = class Controller {
  static async getMenusById(req, res, next) {
    try {
      // const data = await Menu.find().populate("owner.users", "username");

      res.status(200).json({
        code: 200,
        data,
      });
    } catch (error) {
      next(error);
    }
  }
  static async addMenuById(req, res, next) {
    try {
      const { title, description, price, image } = req.body;
      const { id } = req.user;
      console.log(id);

      const thisUser = await User.findById(id, "_id username");
      const newMenu = new Menu({
        title,
        description,
        price: +price,
        image,
        owner: id,
      });

      //* ketika bikin menu berarti nanti findOne and update si user
      //* ketika save menu berarti nanti masukin juga si usernya di find

      // const data = await newMenu.save();

      res.status(201).json({
        code: 201,
        thisUser,
      });
    } catch (error) {
      next(error);
    }
  }
};
