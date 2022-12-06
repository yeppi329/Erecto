const Pool = require('pg').Pool

const pool = new Pool({
  user: "tunaboy",
  host: "192.168.61.0",
  database: "mergy_tuna",
  password: "tuna!23",
  port: 5432
});

module.exports = pool;