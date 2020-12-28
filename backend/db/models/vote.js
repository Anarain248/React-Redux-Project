'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('Vote', {
    id: DataTypes.INTEGER,
    upvote: DataTypes.INTEGER,
    downvote: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    answerId: DataTypes.INTEGER
  }, {});
  Vote.associate = function(models) {
    Vote.belongsTo(models.Answer, { foreignKey: 'answerId' });
    Vote.belongsTo(models.User, { foreignKey: 'userId' }); // associations can be defined here
  };
  return Vote;

};
