module.exports = function(sequelize, DataTypes) {
    var Average = sequelize.define("Average", {
      menstruationTotal: DataTypes.DECIMAL(3, 2),
      menstruationAvg: DataTypes.DECIMAL(3, 2),
      pregnancyTotal: DataTypes.DECIMAL(3, 2),
      pregnancyAvg: DataTypes.DECIMAL(3, 2),
      cosmeticsTotal: DataTypes.DECIMAL(3, 2),
      cosmeticsAvg: DataTypes.DECIMAL(3, 2),
      garmentTotal: DataTypes.DECIMAL(3, 2),
      garmentAvg: DataTypes.DECIMAL(3, 2),
      totalTotal: DataTypes.DECIMAL(3, 2),
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      }
    });
    return Average;
  };
  
  