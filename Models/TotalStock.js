const mongoose = require("mongoose");

const StockSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  stock: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = mongoose.model("TotalStock", StockSchema);
