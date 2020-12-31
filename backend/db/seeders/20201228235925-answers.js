'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Answers', [
      {
        id: 1,
        body: 'There is no best way to weight train, everybody is different and over time with varying rep ranges you will find your favorite. A quick guid would be strength with 1-5 reps, hypertrophy with 8-12 reps, and endurance with 15-25 reps. ',
        userId: 1,
        questionId: 1,
      },
      {
        id: 2,
        body: 'That will depend on your body type(whether you are a ectomorph, mesomorph, or endomorph) along with your body weight and daily activity',
        userId: 2,
        questionId: 2,
      },
      {
        id: 3,
        body: 'Compound exercises work multiple muscle groups at the same time while Isolation exercises only work one muscle group at a time.',
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
