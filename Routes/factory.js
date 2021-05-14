const express = require("express");
const router = express.Router();
const Factory = require("../Models/Factory");

router
  .route("/")
  .get(async (req, res) => {
    try {
      const factories = await Factory.find();

      res.json({ factories });
    } catch (err) {
      res.json(err);
    }

    // TODO get all the Factorys from database
  })
  .post(async (req, res) => {
    try {
      const factory = await Factory.create(req.body);
      res.json({ err: false });
    } catch (err) {
      res.json({ err: true });
    }

    // TODO add a Factory into the database
  });

router
  .route("/:id")
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      const result = await Factory.deleteOne({ _id: id });
      res.send("Deleted");
    } catch (err) {
      res.send("Error");
      console.log(err);
    }
  })
  .get(async (req, res) => {
    //TODO get a single Factory with the id of @param id
    const { id } = req.params;
    try {
      const fac = await Factory.findById(id);
      res.json({ fac });
    } catch (err) {
      res.json({ err });
    }
    res.send(id);
  })
  .put(async (req, res) => {
    try {
      console.log(req.body.Updated);
      const { id } = req.params;
      const filter = { _id: id };
      const update = { totalBal: req.body.Updated };
      const doc = await Factory.findOneAndUpdate(filter, update, { new: true });
      res.json({ err: false });
    } catch (err) {
      res.json({ err: true });
    }
  });

module.exports = router;
