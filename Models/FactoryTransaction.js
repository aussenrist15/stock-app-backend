const mongoose = require("mongoose");

const FactoryTransactionSchema = new mongoose.Schema({
  factoryID: {
    type: String,
    required: true,
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

module.exports = mongoose.model("FactoryTransaction", FactoryTransactionSchema);
