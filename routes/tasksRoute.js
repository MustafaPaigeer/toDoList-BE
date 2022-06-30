import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
import db from "../controller/tasksController.js";

const router = express.Router();

router.get('/', authenticateToken, db.getTasks);
router.get('/search/:key', authenticateToken, db.searchCatOrStat);

export default router;