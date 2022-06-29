const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}));

// Create Database Connection

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'me',
  host: 'localhost',
  database: 'todolist',
  password: process.env.DB_PASS,
  port: 3001,
})


app.listen(
  port,
  () => console.log(`App running on port ${port}.`));

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
});