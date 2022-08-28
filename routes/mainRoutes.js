const express = require("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/", mainController.getMenusById);
router.post("/addMenu", mainController.addMenuById);

module.exports = router;
