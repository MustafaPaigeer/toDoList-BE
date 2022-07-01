import express from "express";
import { authenticateToken } from "../middleware/authorization.js";
import controller from "../controller/tasksController.js";

const router = express.Router();

router.get('*', authenticateToken);
router.get('/', controller.getTasks);
router.get('/search/:key', controller.searchCatOrStat);
router.post('/', authenticateToken, controller.createTask);
router.put('/update', authenticateToken, controller.updateTask);
router.delete('/delete', authenticateToken, controller.deleteTask);

export default router;