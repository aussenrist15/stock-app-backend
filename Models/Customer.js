const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Please add a customer name"],
  },

  totalBal: {
    type: Number,
    required: [true, "Please add a total balance"],
  },
});

module.exports = mongoose.model("Customer", CustomerSchema);
