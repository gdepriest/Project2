module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
	name: DataTypes.STRING,
	county: DataTypes.STRING,
    income: DataTypes.INTEGER,
    menstruation_m: DataTypes.INTEGER,
    menstruation_y: DataTypes.INTEGER,
    pregnancy_m: DataTypes.INTEGER,
    pregnancy_y: DataTypes.INTEGER,
    cosmetics_m: DataTypes.INTEGER, 
    cosmetics_y: DataTypes.INTEGER,
    garments_m: DataTypes.INTEGER,
    garments_y: DataTypes.INTEGER,
    feedback: DataTypes.TEXT,

  });
  return Survey;
};

