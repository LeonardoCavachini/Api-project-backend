module.exports = (sequelize, DataTypes) => {
  const ComicsFavorites = sequelize.define('ComicsFavorites', {
    thumbnail: DataTypes.STRING,
    title: DataTypes.STRING,
    idComic: DataTypes.STRING,
  });
  return ComicsFavorites;
};