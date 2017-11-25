import bcrypt from 'bcrypt';
import Model from './_model';

const knex = require('knex')(require('../.knex/knexfile')[process.env.NODE_ENV]);

/**
 * 'users' database table methods
 */
export default class Users extends Model {
  constructor() {
    super();
    this.model = 'users';
  }

  /**
   * Creates a new user
   * @param  {String}  username
   * @param  {String}  password
   * @param  {String}  [role='user'] Translates this string to an integer value
   * @return {Object}
   */
  async create(username, password, role = 'user') {
    const roleVal = role === 'admin'
      ? 10
      : 0;
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(password, salt);
      const user = await knex.raw(`
        INSERT INTO ${this.model} (username, hash, role)
        VALUES ('${username}', '${hash}', ${roleVal})
        RETURNING id, username, created_at, role
      `);
      return user.rows.length > 0
        ? user.rows[0]
        : {};
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Fetches one user by username
   * @param  {String}  username
   * @return {Object}
   */
  async fetchOne(username) {
    try {
      const user = await knex.raw(`
        SELECT
          *
        FROM ${this.model} u
        WHERE LOWER(u.username) = LOWER('${username}')
      `);
      return user.rows.length > 0
        ? user.rows[0]
        : {};
    } catch (err) {
      throw new Error(err);
    }
  }

  /*
  * Checks if a username is already in use,
  * used by registration process
  */
  async fetchIfExists(username) {
    try {
      const user = await knex.raw(`
        SELECT username
        FROM ${this.model}
        WHERE LOWER(username) = LOWER('${username}')
      `);
      return user.rows.length > 0
        ? user.rows[0]
        : null;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Determine with a user is an admin
   * @param  {String}  username
   * @return {Boolean}
   */
  async isAdmin(username) {
    try {
      const user = await knex.raw(`
        SELECT u.role
        FROM ${this.model} u
        WHERE LOWER(u.username) = LOWER('${username}')
      `);
      // false if no results
      // or the role is less than 10
      if (
        user.rows.length === 0 ||
        Number(user.rows[0].role) < 9
      ) {
        return false;
      }
      return true;
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
   * Fetch a user ID from username
   * @param  {String}  username
   * @return {Integer}
   */
  async fetchId(username) {
    try {
      const user = await knex.raw(`
        SELECT id
        FROM ${this.model}
        WHERE LOWER(username) = LOWER('${username}')
      `);
      // return ID if the user was found or null if not found
      return user.rows.length > 0
        ? user.rows[0].id
        : null;
    } catch (err) {
      throw new Error(err);
    }
  }

  async update(userName, data, callback) {
    try {
      const model = await knex.raw(`
        SELECT * FROM ${this.model}
        WHERE LOWER(username) = LOWER('${userName}')
      `);
      let updateWasPerformed = false;
      const user = model.rows[0];
      if (data.email && data.email !== user.email) {
        user.email = data.email;
        updateWasPerformed = true;
      }
      if (data.password) {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(data.password, salt);
        user.hash = hash;
        updateWasPerformed = true;
      }
      knex.raw(`
        UPDATE users
        SET
          hash = '${user.hash}',
          email = '${user.email}'
        WHERE LOWER(username) = LOWER('${userName}')
      `).then(() => {
        callback(updateWasPerformed);
      });
    } catch (err) {
      throw new Error(err);
    }
  }
}
