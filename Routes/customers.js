const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("GET REQUEST RECEIVED");
    // TODO get all the customers from database
  })
  .post((req, res) => {
    res.send("POST REQUEST RECEIVED");
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
