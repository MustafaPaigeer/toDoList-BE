import pool from "../config/config.js";
import bcrypt from 'bcryptjs';

// Register new user
const createUser = (req, res) => {
  const { username, email, password } = req.body;
  //hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);
  pool
    .query('INSERT INTO users (username, email, password) VALUES($1,$2,$3) RETURNING *', [username, email, hashedPassword])
    .then(data => res.json({ user: data.rows[0] }))
    .catch(err => res.status(502).json({error: 'Failed to insert data'}))
};

export default { createUser };