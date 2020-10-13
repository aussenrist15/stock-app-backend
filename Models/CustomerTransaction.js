const mongoose = require("mongoose");

const CustomerTransactionSchema = new mongoose.Schema({
  customerID: {
    type: String,
    required: [true, "Please add a customer ID"],
  },

  date: {
    type: Date,
    required: [true, "Please add a date"],
  },

  totalBill: {
    type: Number,
    required: [true, "Please add a total bill"],
  },

  paid: {
    type: Number,
    required: [true, "Please add paid amount"],
  },
});

module.exports = mongoose.model(
  "CustomerTransaction",
  CustomerTransactionSchema
);
