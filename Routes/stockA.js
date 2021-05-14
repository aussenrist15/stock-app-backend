const express = require("express");
const router = express.Router();
const StockA = require("../Models/StockA");
const TotalStock = require("../Models/TotalStock");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const retStock = await StockA.find();
      res.send(retStock);
    } catch (err) {
      res.send("Error getting the data");
    }

    // TODO get all the stock data from database
  })
  .post(async (req, res) => {
    try {
      const stock = await StockA.create(req.body);
      res.send("Added");
    } catch (error) {
      res.send("Error Occured");
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
      const A = await TotalStock.find({ name: "A" });
      res.json(A);
    } catch (err) {
      res.json(err);
    }
  })
  .post(async (req, res) => {
    try {
      console.log(req.body);
      await TotalStock.findOneAndUpdate(
        { name: "A" },
        { stock: req.body.stock }
      );
      res.json({ msg: "Ok hai boss" });
    } catch (error) {
      res.json({ msg: "Error agya hai yar" });
    }
  });

module.exports = router;
