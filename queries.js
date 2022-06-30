
import pool from './config.js';
import bcrypt from 'bcryptjs';


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
const createUser = (req, res) => {
  const { username, email, password } = req.body;
  console.log('Password is: ', password)
  const hashedPassword = bcrypt.hashSync(password, 10);
  console.log('Hashed Pass is : ', hashedPassword);
  pool
    .query('INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING *', [username, email, hashedPassword])
    .then(data => res.json({user: data.rows[0]}))
    .catch(err => res.status(500).json(`Query failed`, err))
};


const getTasks = (req, res) => {
  pool
    .query('SELECT * FROM tasks ORDER BY id DESC')
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(500).json('Error executing query', err.message))
};

const createTask = (req, res) => {
  console.log(req.body)
  const { user_id, category, description, status } = req.body;
  console.log(user_id)
  pool
    .query(`Insert Into tasks (user_id, category, description, status) Values($1,$2,$3,$4) RETURNING *`, [user_id, category, description, status])
    .then(data => res.send(`Todo item added successfully`))
    .catch(err => res.send(`Query failed`, err))
};
const updateTask = (req, res) => {

};
const deleteTask = (req, res) => {

};

export default { createUser, getTasks, createTask, updateTask, deleteTask };