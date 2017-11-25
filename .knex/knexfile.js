const config = {
  client: 'pg',
  connection: {
    host: process.env.EO_DB_HOST,
    user: process.env.EO_DB_USER,
    password: process.env.EO_DB_PASSWORD,
    database: process.env.EO_DB_DATABASE,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
  },
};

module.exports = {
  development: config,
  production: config,
};
