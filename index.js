import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import {dirname,join} from 'path';
import {fileURLtoPath} from 'url';
import db from './queries.js';
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));



const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}));

// All routes

// app.get('/', (request, response) => {
//   response.send('Welcome to home page')
// });
app.get('/', db.getTasks);
app.get('/task', db.getTasks);
//app.get('/task/category', db.getTaskbyCategory)
app.put('/task/:id', db.updateTask);
app.post('/task/:id', db.createTask);
app.delete('/task/:id', db.deleteTask);


app.listen(
  port,
  () => console.log(`App running on port ${port}.`));