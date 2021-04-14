module.exports = (sequelize, DataTypes) => {
  const CharactersFavorites = sequelize.define('CharactersFavorites', {
    thumbnail: DataTypes.STRING,
    name: DataTypes.STRING,
    idCharacter: DataTypes.STRING,
  });
  return CharactersFavorites;
};