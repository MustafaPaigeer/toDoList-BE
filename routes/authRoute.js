import express from "express";

import controller from "../controller/authsController.js";
const router = express.Router();

router.post('/login', controller.login);

router.get('/refreshToken', controller.refreshToken);

router.delete('/logout', controller.logout);

export default router;