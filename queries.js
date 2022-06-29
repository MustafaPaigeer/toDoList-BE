
const config = require('./config');

// Create Database Connection

const Pool = require('pg').Pool
const pool = new Pool({
  user: config.db.user,
  host: config.db.host,
  database: config.db.database,
  password: config.db.password,
  port: config.db.port,
});

// pool.connect(function (err) {
//   if (err) {
//     return console.error("could not connect to todolist DB")
//   }
//   pool.query('SELECT NOW() AS "theTime"', function (err, result) {
//     if (err) {
//       return console.error("error running query", err)
//     }
//     console.log(result.rows[0].theTime)
//     pool.end();
//   })
// });

const getTasks = (request, response) => {
  pool.query('SELECT * FROM tasks ORDER BY id DESC', (error, results) => {
    if (error) {
      throw error
      console.log('error', error);
    }
    console.log("result", results.rows);
    return results.rows;
  })
}

getTasks();