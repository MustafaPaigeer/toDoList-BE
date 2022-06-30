import pool from '../config.js';

const getTasks = (req, res) => {
  pool
    .query('SELECT * FROM tasks ORDER BY id DESC')
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(500).json({message: 'Error executing query'}))
};

const createTask = (req, res) => {
  //console.log(req.body)
  const { user_id, category, description, status } = req.body;
  //console.log(user_id)
  pool
    .query(`Insert Into tasks (user_id, category, description, status) Values($1,$2,$3,$4) RETURNING *`, [user_id, category, description, status])
    .then(data => res.send(`Todo item added successfully`))
    .catch(err => res.send(`Query failed`, err))
};
const updateTask = (req, res) => {

};
const deleteTask = (req, res) => {

};

export default { getTasks, createTask, updateTask, deleteTask };