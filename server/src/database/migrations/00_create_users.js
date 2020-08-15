exports.up = (knex) => {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users');
}