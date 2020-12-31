'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Questions', [{
      body: 'What is the best way to weight train?',
      userId: 1,
    },
    {
      body: 'Which macro nutrients are best for me?',
      userId: 2,
    },
    {
      body: 'What is the difference between compound exercises versus isolation exercises?',
      userId: 3,
    },
    {
      body: 'What is the best way to weight train?',
      userId: 4,
    },
    {
      body: 'Which macro nutrients are best for me?',
      userId: 5,
    },
    {
      body: 'What is the difference between compound exercises versus isolation exercises?',
      userId: 6,
    },
    {
      body: 'What is the best way to weight train?',
      userId: 7,
    },
    {
      body: 'Which macro nutrients are best for me?',
      userId: 8,
    },
    {
      body: 'What is the difference between compound exercises versus isolation exercises?',
      userId: 9,
    },
    {
      body: 'What is the best way to weight train?',
      userId: 10,
    },
    {
      body: 'Which macro nutrients are best for me?',
      userId: 11,
    },
    {
      body: 'What is the difference between compound exercises versus isolation exercises?',
      userId: 12,
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
