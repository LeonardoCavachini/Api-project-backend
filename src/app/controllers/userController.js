const { Router } = require('express');

const { users } = require('../models');

const userController = Router();

const createToken = require('../auth/createToken');
const checkRegister = require('../middlewares/user/checkRegister');
const checkUser = require('../middlewares/user/checkUser');
const checkAuth = require('../middlewares/user/checkAuth')

userController.post('/register', checkRegister, async (req, res) => {

  const { dataValues } = await users.create(req.body);

  res.status(201).json(dataValues);
});
userController.post('/login', checkUser, async (req, res) => {
  const { email, password } = req.body;
  const token = createToken(req.body);
  const { id } = await users.findOne({ where: {email, password}})
  res.status(201).json({ resp: { token, id, email, password }});
});
userController.put('/profile/:id', checkAuth, async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  await users.update({
    password, email
  },{
    where: {
      id,
    }
  })
  
  res.status(201).json({ message: 'user updated'});
})

module.exports = userController;
