module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    name: DataTypes.STRING,
    county: DataTypes.STRING,
    income: DataTypes.INTEGER,
    menstruation: DataTypes.INTEGER,
    menstruation_monthly: DataTypes.BOOLEAN,
    pregnancy: DataTypes.INTEGER,
    pregnancy_monthly: DataTypes.BOOLEAN,
    cosmetics: DataTypes.INTEGER, 
    cosmetics_monthly: DataTypes.BOOLEAN,
    garments: DataTypes.INTEGER,
    garments_monthly: DataTypes.BOOLEAN,
    feedback: DataTypes.TEXT,
    totalExpense: DataTypes.INTEGER,
    incomePercentage: DataTypes.DECIMAL(3, 2)
  });
  return Survey;
};

