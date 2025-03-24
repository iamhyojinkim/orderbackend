const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const orderSchema = new Schema(
  {
    status: { type: String, default: "preparing" },
    totalPrice: { type: Number, required: true, default: 0 },
    shipTo: {
      firstName: { type: String, required: true },
      lastName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      zip: { type: String, required: true },
    },
    products: [
      {
        image: { type: String, required: true },
        price: { type: Number, required: true },
        title: { type: String, required: true },
        option: { type: String, required: true },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    contact: { type: String, required: true },
    orderNum: { type: String, required: true },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
