exports.up = function(knex, Promise) {
  return knex.schema.createTable("card", table => {
    table.increments();
    table.text("title").notNullable();
    table.integer("goal");
    table.integer("goal_period").defaultTo(1);
    table.timestamps(false, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("card");
};
