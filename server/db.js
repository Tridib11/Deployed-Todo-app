const Pool = require('pg').Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env. USER,
  password: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DBPORT,
  database: process.env.DATABASE
});
//
// // Log the password for debugging purposes
// console.log("Password:", process.env.PASSWORD);
// console.log("Username:", process.env.USER);

module.exports = pool;