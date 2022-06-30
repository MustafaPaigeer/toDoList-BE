import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
//import pool from "../config.js";
import controller from "../controller/usersController.js";

const router = express.Router();

router.post('/register', controller.createUser);


export default router;