module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('users', {
    password: DataTypes.INTEGER,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
  });
  return User;
};