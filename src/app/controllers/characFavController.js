const { Router } = require('express');

const { CharactersFavorites } = require('../models');

const favCharcController = Router();

favCharcController.get('/all', async (req, res) => {
  const getFavorites = await  CharactersFavorites.findAll();

  res.status(200).json(getFavorites);
});

favCharcController.get('/:id', async (req, res) => {

  const { id } = req.params;

  const getOneFavorites = await  CharactersFavorites.findOne({
    where: {
      idCharacter: id,
    }
  });

  res.status(200).json(getOneFavorites);
});

favCharcController.post('/', async (req, res) => {

  const { dataValues } = await CharactersFavorites.create(req.body);

  res.status(201).json(dataValues);
});
favCharcController.delete('/:id', async (req, res) => {

  const { id } = req.params;

  await CharactersFavorites.destroy ({
    where: {
      idCharacter: id,
    }
  });
  res.status(200).json({message: 'item deletado'});
});

module.exports = favCharcController;