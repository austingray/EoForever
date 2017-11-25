
exports.up = (knex, Promise) => {
  return knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS citext;
  `).then(() => {
    return Promise.all([
      // users
      knex.schema.createTable('users', (table) => {
        table.uuid('id').defaultTo(knex.raw('uuid_generate_v4()')).primary();
        table.specificType('email', 'CITEXT');
        table.text('hash').notNullable();
        table.integer('role').defaultTo(0);
        table.text('display_name');
        table.text('first_name');
        table.text('last_name');
        table.date('date_of_birth');
        table.timestamps(true, true);
      }),
    ]);
  });
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.raw('DROP TABLE users CASCADE'),
  ]);
};
