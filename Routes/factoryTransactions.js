const express = require("express");
const router = express.Router();
const FactoryTransaction = require("../Models/FactoryTransaction");
const Factory = require("../Models/Factory");

router
  .route("/")
  .get(async (req, res) => {
    // TODO get all the transactions from database
  })
  .post(async (req, res) => {
    try {
      const factoryTransaction = await FactoryTransaction.create(req.body);
      let diff = req.body.totalBill - req.body.paid;
      let Cust = await Factory.findById(req.body.factoryID);
      let newBal = Cust.totalBal + diff;
      await Factory.findByIdAndUpdate(req.body.factoryID, {
        totalBal: newBal,
      });
      res.json({ err: false });
    } catch (error) {
      res.json({ err: true });
    }
    // TODO add a transaction into the database
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    // TODO delete a transaction from the database
  })
  .get(async (req, res) => {
    const { id } = req.params;

    try {
      const transactions = await FactoryTransaction.find({ factoryID: id });
      res.json({ transactions });
    } catch (err) {
      res.send(
        "Unexpected error occured while getting data from server. Please try again"
      );
    }
    // TODO get all transactions with the user ID of @param id
  });

module.exports = router;
