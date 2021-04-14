const { users } = require('../../models');

const checkRegister = async (req, res, next) => {
  const { email, password } = req.body;

  const userVerify = await users.findAll({
    where: {
      email,
      password
    }

  });
  if (userVerify.length > 0) return res.status(302).json({ message: 'user already exists' });
  next();
};

module.exports = checkRegister;