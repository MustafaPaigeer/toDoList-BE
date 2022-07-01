import express from "express";

import controller from "../controller/usersController.js";

const router = express.Router();

router.post('/register', controller.createUser);

export default router;