const express = require("express");
const router = express.Router();
const models = require("../models");

models.sequelize.authenticate().then(() => console.log("yippie"));

router.get("/", (req, res) =>
  models.Card.findAll()
    .then(cards => {
      res.render("cards", { cards });
    })
    .catch(err => console.log(err))
);

module.exports = router;
