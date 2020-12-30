'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        id: 1,
        body: 'demo',
        userId: 1,
        questionId: 1,
      },
      {
        id: 2,
        body: 'demo2',
        userId: 2,
        questionId: 2,
      },
      {
        id: 3,
        body: 'demo3',
        userId: 3,
        questionId: 3,
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
    return queryInterface.bulkDelete('Answers', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
