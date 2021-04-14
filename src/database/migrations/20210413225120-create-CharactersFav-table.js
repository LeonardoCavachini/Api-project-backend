'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CharactersFavorites', { 
      id: {
      type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true, 
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idCharacter: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CharactersFavorites');
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
  }
};
