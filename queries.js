// Create Database Connection

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'todolist',
  password: process.env.DB_PASS,
  port: 3001,
})