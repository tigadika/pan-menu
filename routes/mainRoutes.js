const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");
const authentication = require("../middlewares/authentication");

router.get("/", mainController.getMenusById);
router.post("/addMenu", authentication, mainController.addMenuById);

module.exports = router;
