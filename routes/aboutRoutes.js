const express = require("express");

const AboutController = require("../controllers/AboutController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/",checkAuth, AboutController.addAbout);
router.get("/:aboutId", AboutController.getOneAbout);
router.get("/", AboutController.getAllAbouts);
router.delete("/:aboutId",checkAuth, AboutController.deleteAbout);
router.put("/:aboutId",checkAuth, AboutController.updateAbout);

module.exports = router;
