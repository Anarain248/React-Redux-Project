'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Votes', [{
      id: 1,
      upvote: 5,
      downvote: 5,
      userId: 1,
      answerId: 1,
    },
    {
      id: 2,
      upvote: 10,
      downvote: 10,
      userId: 2,
      answerId: 2,
    },
    {
      id: 3,
      upvote: 15,
      downvote: 15,
      userId: 3,
      answerId: 3,
    }
  ], {});
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
    return queryInterface.bulkDelete('Votes', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
