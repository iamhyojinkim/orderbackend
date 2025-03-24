const express = require("express");
const router = express.Router();
const orderApi = require("./order.api");

router.use("/order", orderApi);

module.exports = router;
