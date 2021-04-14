const { users } = require('../../models');

const checkUser = async (req, res, next) => {
  const { email, password } = req.body;
    const userVerify = await users.findAll({
      where: {
        email,
        password
      }
  
    });
    console.log('array',userVerify.length);
    if (userVerify.length < 1) return res.status(404).json({ message: 'user not found'});
  next();
};

module.exports = checkUser;