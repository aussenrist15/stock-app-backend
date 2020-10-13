const express = require("express");
const router = express.Router();
const CustomerTransaction = require("../Models/CustomerTransaction");

router
  .route("/")
  .get((req, res) => {
    res.send(data);
    // TODO get all the transactions from database
  })
  .post(async (req, res) => {
    try {
      const customerTransaction = await CustomerTransaction.create(req.body);
      res.send("Added");
    } catch (error) {}
    // TODO add a transaction into the database
  });

router
  .route("/:id")
  .delete((req, res) => {
    const { id } = req.params;
    const obje = data.filter((item) => item.id != id);

    res.send(obje);
    // TODO delete a transaction from the database
  })
  .get((req, res) => {
    const { id } = req.params;
    const obje = data.filter((item) => item.id == id);
    res.send(obje);
    // TODO get all transactions with the user ID of @param id
  });

module.exports = router;
