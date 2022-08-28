const express = require("express");
const router = express.Router();

const userRoutes = require("./userRoutes");
const mainRoutes = require("./mainRoutes");
const authentication = require("../middlewares/authentication");

router.get("/", (req, res) => {
  res.status(200).json({
    code: 200,
    message: "ok",
  });
});
router.use("/user", userRoutes);
router.use("/main", mainRoutes);

module.exports = router;
