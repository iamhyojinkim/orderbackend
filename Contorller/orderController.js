const orderContoller = {};
const Order = require("../model/Order");
const { ObjectId } = require("mongodb");

orderContoller.createOrder = async (req, res) => {
  const orderNum = new ObjectId().toString();

  try {
    const { status, totalPrice, shipTo, products, contact } = req.body;
    const newOrder = new Order({
      status,
      totalPrice,
      shipTo,
      products,
      contact,
      orderNum,
    });

    await newOrder.save();
    res.status(200).json({ status: "success", data: newOrder });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

orderContoller.getOrder = async (req, res) => {
  try {
    const myOrder = await Order.find({});
    res.status(200).json({ status: "good", data: myOrder });
  } catch (error) {
    res.status(400).json({ status: "fail", error: error.message });
  }
};

module.exports = orderContoller;
