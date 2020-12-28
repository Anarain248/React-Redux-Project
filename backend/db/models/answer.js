'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    id: DataTypes.INTEGER,
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
    Answer.hasMany(models.Vote, { foreignKey: 'answerId' });

    // associations can be defined here
  };
  return Answer;
};
