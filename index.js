import express from 'express';
import bodyParser from 'body-parser';
import db from './queries.js';

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}));



// All routes

// app.get('/', (request, response) => {
//   response.send('Welcome to home page')
// });
app.get('/', db.getTasks)
app.get('/task', db.getTasks)
app.post('/task', db.createTask)


app.listen(
  port,
  () => console.log(`App running on port ${port}.`));