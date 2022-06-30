import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']; // Bearer Token
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(403).json({ error: "A token is required for authentication" });

  jwt.verify(token, process.env.ACCESS_TOKEN_KEY, (error, user) => {
    if (error) return res.status(403).json({ error: error.message });
    req.user = user;
    next();
  })
}

export { authenticateToken };