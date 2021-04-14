const jwt = require('jsonwebtoken');

const secret = 'dce4ab575a341e2ecf9277a83bac8780';
const headers = {
  algorithm: 'HS256',
  expiresIn: '7d',
};

const createToken = (payload) => {
  const token = jwt.sign(payload, secret, headers);
  return token;
};

module.exports = createToken;