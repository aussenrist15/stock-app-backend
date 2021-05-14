const express = require("express");
const router = express.Router();
const StockB = require("../Models/StockB");
const TotalStock = require("../Models/TotalStock");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const retStock = await StockB.find();
      res.send(retStock);
    } catch (err) {
      res.send("Unexpected error occured while fetching data from the server");
    }
    // TODO get all the stock data from database
  })
  .post(async (req, res) => {
    try {
      const stock = await StockB.create(req.body);
      res.send("Added");
    } catch (error) {
      console.log(error);
    }
    // TODO add a stock into the database
  });

router.route("/:id").delete((req, res) => {
  res.send("DEL REQUEST RECEIVED");
  // TODO delete a Stock from the database
});

router
  .route("/total")
  .get(async (req, res) => {
    try {
      const A = await TotalStock.find({ name: "B" });
      res.json(A);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      await TotalStock.findOneAndUpdate(
        { name: "B" },
        { stock: req.body.stock }
      );
      res.json({ msg: "Ok hai boss" });
    } catch (error) {
      res.json({ msg: "Error agya hai yar" });
    }
  });
module.exports = router;
