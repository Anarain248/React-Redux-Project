'use strict';
module.exports = (sequelize, DataTypes) => {
  const Answer = sequelize.define('Answer', {
    body: DataTypes.TEXT,
    userId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
    upVote: DataTypes.INTEGER,
    downVote: DataTypes.INTEGER
  }, {});
  Answer.associate = function(models) {
    Answer.belongsTo(models.User, { foreignKey: 'userId' });
  

    // associations can be defined here
  };
  return Answer;
};
