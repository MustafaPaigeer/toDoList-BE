import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
//import pool from "../config.js";
import db from "../controller/usersController.js";

const router = express.Router();

router.post('/register', db.createUser);


export default router;