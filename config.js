import 'dotenv/config';
import pg from "pg";
const { Pool } = pg;

const localPoolConfig = {
    user: process.env.DB_USER,
    host: 'localhost',
    database: 'todolist',
    password: process.env.DB_PASS,
    port: 3001,
};

const poolConfig = process.env.DATABASE_URL ? {
  connectionString: process.env.DATABASE_URL, 
  ssl: { rejectUnauthorized: false }
} : localPoolConfig;

// Create Database Connection

const pool = new Pool(poolConfig);

export default pool;