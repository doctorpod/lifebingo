const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

router.get("/", (req, res) =>
  queries.card
    .all()
    .then(cards => {
      res.render("cards", { cards });
    })
    .catch(err => console.log(err))
);

module.exports = router;
