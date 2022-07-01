import express from "express";
import pool from "../config.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { jwtTokens } from "../utils/jwtHelpers.js";

const router = express.Router();

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    //Check if the email exists
    if (users.rows.length === 0) throw error;
    const validPassword = await bcrypt.compare(password, users.rows[0].password);
    //Check if the password matches
    if (!validPassword) throw error;
    // CREATE AND SEND JWt TOKEN
    let tokens = jwtTokens(users.rows[0]);
    res.cookie('refreshToken', tokens.refreshToken, { httpOnly: true });
    res.status(200).json(tokens);
  } catch (error) {
    res.status(401).json({ error: "Incorrect Email or Password" });
  }
};

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (refreshToken === null) return res.status(401).json({ error: 'Null refresh Token' });
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_KEY, (error, user) => {
      if (error) return res.status(403).json({ error: error.message });
      let tokens = jwtTokens(user);
    });
  } catch (erorr) {
    res.status(401).json({ error: "failed" });
  }
};

const logout = (req, res) => {
  try {
    res.clearCookie('refreshToken');
    return res.status(200).json({ message: 'refresh token deleted' })
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

export default { login, refreshToken, logout };