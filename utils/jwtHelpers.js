import jwt from 'jsonwebtoken';

function jwtTokens({id, username, email}) {
  const user = {id, username, email};
  const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_KEY, {expiresIn: '15m'});
  const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_KEY, {expiresIn: '12h'});
  return ({accessToken, refreshToken})
}


export {jwtTokens};