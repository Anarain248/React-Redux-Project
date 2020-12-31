'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [{
      id: 1,
      body: 'What is the best way to weight train?',
      userId: 1,
    },
    {
      id: 2,
      body: 'Which macro nutrients are best for me?',
      userId: 2,
    },
    {
      id: 3,
      body: 'What is the difference between compound exercises versus isolation exercises?',
      userId: 3,
    }
  ],  {});
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Questions', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
