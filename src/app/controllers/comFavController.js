const { Router } = require('express');

const { ComicsFavorites } = require('../models');

const favComController = Router();

favComController.get('/all', async (req, res) => {
  const getFavorites = await  ComicsFavorites.findAll();

  res.status(200).json(getFavorites);
});

favComController.get('/:id', async (req, res) => {

  const { id } = req.params;

  const getOneFavorites = await  ComicsFavorites.findOne({
    where: {
      idComic: id,
    }
  });

  res.status(200).json(getOneFavorites);
});

favComController.post('/', async (req, res) => {

  const { dataValues } = await ComicsFavorites.create(req.body);

  res.status(201).json(dataValues);
});
favComController.delete('/:id', async (req, res) => {

  const { id } = req.params;

  await ComicsFavorites.destroy ({
    where: {
      idComic: id,
    }
  });
  res.status(200).json({message: 'item deletado'});
});

module.exports = favComController;