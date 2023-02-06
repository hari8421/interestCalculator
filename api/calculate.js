const express = require("express");
const router = express.Router();
const controller=require("../controller/CalculateController")

router.get("/",controller.getPercentage);
router.post("/percentage",controller.calculatePercentage);


module.exports =router;