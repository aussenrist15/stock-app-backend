const express = require("express");
const router = express.Router();

const data = [
  {
    id: 1,
    name: "Basit",
  },
  {
    id: 2,
    name: "Ayesha",
  },
  {
    id: 3,
    name: "Ashu",
  },
  {
    id: 4,
    name: "Chay",
  },
];

router
  .route("/")
  .get((req, res) => {
    res.send(data);
    // TODO get all the transactions from database
  })
  .post((req, res) => {
    console.log(typeof req.body);
    data.push(req.body);
    res.send("Ok hogya jee");
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
