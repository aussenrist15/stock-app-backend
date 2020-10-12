const express = require("express");
const router = express.Router();
const Customer = require("../Models/Customer");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const customers = await Customer.find();

      res.send(customers);
    } catch (err) {
      res.send(err);
    }

    // TODO get all the customers from database
  })
  .post(async (req, res) => {
    try {
      const customer = await Customer.create(req.body);
      res.send("Added");
    } catch (err) {
      res.send("Error");
    }

    // TODO add a customer into the database
  });

router
  .route("/:id")
  .delete((req, res) => {
    res.send("DEL REQUEST RECEIVED");
    // TODO delete a customer from the database
  })
  .get((req, res) => {
    //TODO get a single customer with the id of @param id
    const { id } = req.params;
    res.send(id);
  });

module.exports = router;
