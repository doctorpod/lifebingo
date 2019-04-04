const cards = require("./data/cards");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("card")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("card").insert(cards);
    });
};
