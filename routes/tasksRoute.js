import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
import controller from "../controller/tasksController.js";

const router = express.Router();

router.get('/', authenticateToken, controller.getTasks);
router.get('/search/:key', authenticateToken, controller.searchCatOrStat);
router.put('/update', authenticateToken, controller.updateTask);

export default router;