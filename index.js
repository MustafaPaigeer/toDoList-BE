import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import usersRouter from './routes/usersRoute.js';
import authRouter from './routes/authRoute.js';
import tasksRouter from './routes/tasksRoute.js';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = process.env.PORT || 3000;
const corsOptions = { Credentials: true, origin: process.env.URL || '*' };

app.use(cors(corsOptions));
app.use(json());
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, }));

app.use('/', express.static(join(__dirname, 'public')));

app.use('/user', usersRouter);
app.use('/auth', authRouter);

app.use('/', tasksRouter);
app.use('/task', tasksRouter);


app.listen(port, () => console.log(`App running on port ${port}.`));