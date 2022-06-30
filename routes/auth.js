import express from "express";
import pool from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
//import {jwtTokens} from "../utils/jwtHelper.js"
//import db from "../queries.js";

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    //Check if the email exists
    if(users.rows.length === 0) return res.status(401).json({error: "Email or Password is incorrect"});
    //Check the Password
    const validPassword = await bcrypt.compare(password, users.rows[0].password);
    if(!validPassword) return res.status(401).json({error: "Incorrect Email or Password"});
    // CREATE AND SEND JWt TOKEN
    return res.status(200).json("success")
  } catch (error) {

  }
});


export default router;