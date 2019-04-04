exports.up = function(knex, Promise) {
  return knex.schema.createTable("item", table => {
    table.increments();
    table.text("title").notNullable();
    table.text("description");
    table
      .integer("score")
      .defaultTo(1)
      .notNullable();
    table.integer("period_min");
    table.integer("period_max");
    table.integer("period");
    table.integer("card_id");
    table
      .foreign("card_id")
      .references("id")
      .inTable("card");
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("item");
};
