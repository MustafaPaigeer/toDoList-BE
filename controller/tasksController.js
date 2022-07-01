import pool from '../config.js';

// Get list of all to do items
const getTasks = (req, res) => {
  pool
    .query('SELECT * FROM tasks ORDER BY id DESC')
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(502).json({ message: err.message }))
};

// Create new to do item
const createTask = (req, res) => {
  const user_id = req.user.id;
  const { category, description, status } = req.body;
  pool
    .query(`Insert Into tasks (user_id, category, description, status) Values($1,$2,$3,$4) RETURNING *`, [user_id, category, description, status])
    .then(data => res.status(201).json({ message: `Todo item added successfully` }))
    .catch(err => res.status(502).json({ message: 'query failed' }))
};

//Search to do item by category or status
const searchCatOrStat = (req, res) => {
  const searchString = '%' + req.params.key + '%';
  pool
    .query(`SELECT * FROM tasks WHERE category LIKE $1 OR status LIKE $1`, [searchString])
    .then(data => res.status(200).json(data.rows))
    .catch(err => res.status(502).json({ error: err.message }))
};

const updateTask = (req, res) => {
  const { id, user_id, category, description, status } = req.body;
  if (!(user_id === req.user.id)) return res.status(400).json({ Error: 'Every user can only update their own tasks' });
  pool
    .query(`UPDATE tasks set category = $1, description = $2, status=$3 WHERE id=$4 RETURNING *`, [category, description, status, id])
    .then(data => res.status(200).json({ message: 'To do item updated' }))
    .catch(err => res.status(502).json({ error: err.message }))
};

const deleteTask = (req, res) => {
  const { id, user_id } = req.body;
  if (!(user_id === req.user.id)) return res.status(400).json({ Error: 'Every user can delete their own tasks' });
  pool
    .query(`DELETE FROM tasks WHERE id=$1 RETURNING *`, [id])
    .then(data => res.status(200).json({ message: 'To do item deleted' }))
    .catch(err => res.status(502).json({ error: err.message }))
};

export default { getTasks, createTask, updateTask, deleteTask, searchCatOrStat };