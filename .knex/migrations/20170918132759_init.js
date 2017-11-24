
exports.up = function(knex, Promise) {
  // create uuid and citext extensions
  return knex.raw(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    CREATE EXTENSION IF NOT EXISTS citext;
  `).then(() => {
    return Promise.all([
      // create tables
    ])
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    // delete tables
  ])
};
