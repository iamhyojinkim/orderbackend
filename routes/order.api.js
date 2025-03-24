const express = require("express");
const router = express.Router();
const orderContoller = require("../Contorller/orderController");

router.post("/", orderContoller.createOrder);
router.get("/", orderContoller.getOrder);

module.exports = router;
