const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("GET REQUEST RECEIVED");
    // TODO get all the transactions from database
  })
  .post((req, res) => {
    res.send("POST REQUEST RECEIVED");
    // TODO add a transaction into the database
  });

router
  .route("/:id")
  .delete((req, res) => {
    res.send("DEL REQUEST RECEIVED");
    // TODO delete a transaction from the database
  })
  .get((req, res) => {
    res.send("GET REQUEST WITH A PARAMETER");
    // TODO get all transactions with the user ID of @param id
  });

module.exports = router;
