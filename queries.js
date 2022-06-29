
import pool from './config.js';


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

const getTasks = (req, res) => {
  pool
  .query('SELECT * FROM tasks ORDER BY id DESC')
  .then(res =>  console.log(res.rows))
  .catch(err => console.error('Error executing query', err.stack))
};

const createTask = (req, res) => {
  const {user_id, category, description, status} = req.body;
  pool
    .query(`Insert Into rate (user_id, movie_id, rate, type) Values($1,$2,$3,$4) RETURNING *`, [user_id, category, description, status])
    .then(res => res.send(`Todo item added successfully`) )
    .catch(err => res.send(`Query failed`, err))
};
const updateTask = (req, res) => {

};
const deleteTask = (req, res) => {

};

export default {getTasks, createTask};