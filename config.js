require('dotenv').config();

const config = {
  db: {
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'todolist',
    password: process.env.DB_PASS,
    port: 3001,
  }
};

module.exports = config;