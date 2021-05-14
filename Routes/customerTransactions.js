const express = require("express");
const router = express.Router();
const CustomerTransaction = require("../Models/CustomerTransaction");
const Customer = require("../Models/Customer");

router
  .route("/")
  .get((req, res) => {
    res.send("Hello world");
    // TODO get all the transactions from database
  })
  .post(async (req, res) => {
    try {
      const customerTransaction = await CustomerTransaction.create(req.body);
      let diff = req.body.totalBill - req.body.paid;
      let Cust = await Customer.findById(req.body.customerID);
      let newBal = Cust.totalBal + diff;
      await Customer.findByIdAndUpdate(req.body.customerID, {
        totalBal: newBal,
      });

      res.json({ err: false });
    } catch (error) {
      res.json({ error });
    }
    // TODO add a transaction into the database
  });

router
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    try {
      let transactions = await CustomerTransaction.find({ customerID: id });
      res.json({ transactions });
    } catch (err) {
      res.json({ err });
    }
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      await CustomerTransaction.findByIdAndDelete(id);
      res.json({ err: false });
    } catch (err) {
      res.json({ err: true });
    }

    // TODO delete a transaction from the database
  });

module.exports = router;
