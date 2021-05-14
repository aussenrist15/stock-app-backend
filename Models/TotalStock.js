const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  STOCKA: {
    type: Number,
    required: false,
    default: 0,
  },

  STOCKB: {
    type: Number,
    required: false,
    default: 0,
  },
});

module.exports = mongoose.model("TotalStock", StockSchema);
