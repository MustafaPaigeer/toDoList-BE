import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
//import pool from "../config.js";
import db from "../queries.js";

const router = express.Router();

router.get('/', authenticateToken, db.getTasks);
router.post('/register', db.createUser);


export default router;