const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("GET REQUEST RECEIVED");
    // TODO get all the stock data from database
  })
  .post((req, res) => {
    res.send("POST REQUEST RECEIVED");
    // TODO add a stock into the database
  });

router.route("/:id").delete((req, res) => {
  res.send("DEL REQUEST RECEIVED");
  // TODO delete a Stock from the database
});

module.exports = router;
