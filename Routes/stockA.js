const express = require("express");
const router = express.Router();
const StockA = require("../Models/StockA");

router
  .route("/")
  .get((req, res) => {
    res.send("GET REQUEST RECEIVED");
    // TODO get all the stock data from database
  })
  .post(async (req, res) => {
    try {
      const stock = await StockA.create(req.body);
      res.send("Added");
    } catch (error) {}
    // TODO add a stock into the database
  });

router.route("/:id").delete((req, res) => {
  res.send("DEL REQUEST RECEIVED");
  // TODO delete a Stock from the database
});

module.exports = router;
