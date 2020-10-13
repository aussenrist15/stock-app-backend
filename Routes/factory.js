const express = require("express");
const router = express.Router();
const Factory = require("../Models/Factory");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const factories = await Factory.find();

      res.send(factories);
    } catch (err) {
      res.send(err);
    }

    // TODO get all the Factorys from database
  })
  .post(async (req, res) => {
    try {
      const factory = await Factory.create(req.body);
      res.send("Added");
    } catch (err) {
      res.send("Error");
    }

    // TODO add a Factory into the database
  });

router
  .route("/:id")
  .delete((req, res) => {
    res.send("DEL REQUEST RECEIVED");
    // TODO delete a Factory from the database
  })
  .get((req, res) => {
    //TODO get a single Factory with the id of @param id
    const { id } = req.params;
    res.send(id);
  });

module.exports = router;
