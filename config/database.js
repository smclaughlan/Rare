const config = require("./index");

const db = config.db;
const username = db.username;//'rare_user';
const password = db.password;//'I27wtJmnFT366';
const database = db.database;//'rare';
const host = db.host;

module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: "postgres",
    // "dialectOptions": {
    //   "ssl": true
    // }
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    "dialectOptions": {
      "ssl": {
        "require": true,
        "rejectUnauthorized": false,
      }
    }
  },
  test: {
    dialect: "sqlite",
    DB_CONN: "sqlite.memory",
    logging: false,
  },
};
