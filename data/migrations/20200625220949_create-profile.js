exports.up = (knex) => {
  return knex.schema
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .createTable('profiles', function (table) {
      table.string('id').notNullable().unique().primary();
      table.string('email');
      table.string('name');
      table.string('avatarUrl');
      table.timestamps(true, true);
    })
    .createTable('orders', function (orders) {
      orders.increments('id');
      orders
        .integer('buyer_id')
        .unsigned()
        .references('id')
        .inTable('profiles');
      orders.string('organization_name').notNullable();
      orders.string('contact_name').notNullable();
      orders.string('contact_email').notNullable();
      orders.string('country').notNullable();
      orders.integer('bars_requested').notNullable();
      orders.integer('beneficiaries').notNullable();
    });
};

exports.down = (knex) => {
  return knex.schema.dropTableIfExists('profiles').dropTableIfExists('orders');
};
