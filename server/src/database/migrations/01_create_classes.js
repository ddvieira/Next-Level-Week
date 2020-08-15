exports.up = (knex) => {
  return knex.schema.createTable('classes', table => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.string('cost').notNullable();

    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('classes');
}