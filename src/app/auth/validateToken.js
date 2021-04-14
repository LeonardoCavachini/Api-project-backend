const jwt = require('jsonwebtoken');

const secret = 'dce4ab575a341e2ecf9277a83bac8780';

const validateToken = (token) => {
  const check = jwt.decode(token, secret);
  return check;
};

module.exports = validateToken;