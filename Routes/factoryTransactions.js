const express = require("express");
const router = express.Router();
const FactoryTransaction = require("../Models/FactoryTransaction");

router
  .route("/")
  .get((req, res) => {
    // TODO get all the transactions from database
  })
  .post(async (req, res) => {
    try {
      const factoryTransaction = await FactoryTransaction.create(req.body);
      res.send("Added");
    } catch (error) {}
    // TODO add a transaction into the database
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    // TODO delete a transaction from the database
  })
  .get(async (req, res) => {
    const { id } = req.params;
    const obje = data.filter((item) => item.id == id);
    try {
      const retData = await FactoryTransaction.find({ factoryID: id });
      res.send(retData);
    } catch (err) {
      res.send(
        "Unexpected error occured while getting data from server. Please try again"
      );
    }
    // TODO get all transactions with the user ID of @param id
  });

module.exports = router;
