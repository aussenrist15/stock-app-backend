const mongoose = require("mongoose");

const StockASchema = new mongoose.Schema({
  metersList: {
    type: Array,
    default: [],
  },
  sum: {
    type: Number,
    required: true,
  },

  pageNum: {
    type: Number,
    required: [true, "Please add a page number"],
  },

  totalBill: {
    type: Number,
    required: [true, "Please add a total bill"],
  },

  type: {
    type: String,
    required: [true, "Please add a type"],
  },

  date: {
    type: Date,
    required: true,
  },
  pName: {
    type: String,
    required: false,
  },
  stockAafterUpdate: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("StockA", StockASchema);
