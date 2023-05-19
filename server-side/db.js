const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lala1505",
  database: "social",
});

module.exports = { db };
