import express from "express";
import pool from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import {jwtTokens} from "../utils/jwtHelpers.js"
//import db from "../queries.js";

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const {email, password} = req.body;
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    //Check if the email exists
    if(users.rows.length === 0) throw error;//return res.status(401).json({error: "Email or Password is incorrect"});
    //Check the Password
    const validPassword = await bcrypt.compare(password, users.rows[0].password);
    if(!validPassword) throw error;//return res.status(401).json({error: "Incorrect Email or Password"});
    // CREATE AND SEND JWt TOKEN
    let tokens = jwtTokens(users.rows[0]);
    res.cookie('refresh_token', tokens.refreshToken, {httpOnly:true});
    res.json(tokens);
  } catch (error) {
    res.status(401).json({error: "Incorrect Email or Password"});
  }
});

router.get('/refreshToken', (req, res) => {
  try{
    const refreshToken = req.cookies.refreshToken;
    if(refreshToken === null) return res.status(401).json({error: 'Null Refresh Token'});
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (error, user) => {
      if(error) return res.status(403).json({error: error.message});
      let tokens = jwtTokens(user);
    });
  }catch(erorr) {
    res.status(401).json({error: error.message});
  }
 });
 
 router.delete('/refreshToken', (req,res) => {
  try {
  res.clearCookie('refreshToken');
  return res.status(200).json({message: 'refresh token deleted'})} catch (error) {
    res.status(401).json({error: error.message});
  }
 });

 export default router;