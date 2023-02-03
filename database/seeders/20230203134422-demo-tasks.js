'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Tasks', [
      {
        name: 'Have breakfast at 7 o clock in the morning',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Go to office at 11 o clock in the morning',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Do all the tasks assigned to you',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Discuss doubt among yourself after the codeacademy',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Have dinner at 8 o clock in the evening',
        isCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};