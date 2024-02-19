'use strict';

const {Item} = require('../models')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await Item.create({
      value: 'Zrob zakupy',
      finished: false,
    })
      .catch(error => {
        console.log('Blad w saving to database:', error)
      })
    
    
    
    //rekord drugi
    await Item.create({
      value: 'Idz do fryziera',
      finished: false,
    })
      .catch(error => {
        console.log('Blad w saving to database:', error)
      })
    




  },

  async down (queryInterface, Sequelize) {
    
    
  }
};
