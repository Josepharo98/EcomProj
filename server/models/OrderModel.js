const mongoose = require('mongoose');

const productOrderSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, required: true },
  quantity: { type: Number, required: true },
  productName: { type: String, required: true },
  price: { type: Number, required: true },
});

const orderSchema = new mongoose.Schema({
  products: [productOrderSchema],
  totalPrice: { type: Number, required: true },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
