import express from "express";
//import pool from "../config.js";
import db from "../queries.js";

const router = express.Router();

router.get('/', db.getTasks);
router.post('/register', db.createUser);


export default router;