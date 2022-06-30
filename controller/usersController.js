import pool from '../config.js';
import bcrypt from 'bcryptjs';

const createUser = (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  pool
    .query('INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING *', [username, email, hashedPassword])
    .then(data => res.json({ user: data.rows[0] }))
    .catch(err => res.status(502).json(`Query failed`, err))
};

export default { createUser };