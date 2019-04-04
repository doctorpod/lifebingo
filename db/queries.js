const connection = require("./knex");

module.exports = {
  card: {
    all: function() {
      return connection("card");
    }
  },
  item: {
    allFor: function(card_id) {
      return connection("item").where({ card_id: card_id });
    }
  }
};
