const { compareHash } = require('../helpers/hashPassword');
const { User } = require('../models');

module.exports = class Controller {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body

      const newUser = new User({
        username,
        email,
        password
      })

      const data = await newUser.save()

      res.status(201).json({
        code: 201,
        message: "Success creating data",
        data
      })
    } catch (error) {
      next(error)
    }
  }

  static async login(req, res, next) {
    try {
      const { user, password } = req.body

      const foundUser = await User.findOne({
        $or: [
          { username: user },
          { email: user }
        ]
      })

      if (!foundUser) throw { name: "InvalidUser" }

      const validateUser = compareHash(password, foundUser.password)

      if (!validateUser) throw { name: "InvalidPassword" }

      //! token handler

      res.status(200).json({
        code: 200,
        message: "Success get data",
        foundUser
      })
    } catch (error) {
      next(error)
    }
  }
}