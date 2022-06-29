import 'dotenv/config';
import pg from "pg";
const { Pool } = pg;

const config = {
  db: {
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'todolist',
    password: process.env.DB_PASS,
    port: 3001,
  }
};

// Create Database Connection

const pool = new Pool(config.db);

export default pool;