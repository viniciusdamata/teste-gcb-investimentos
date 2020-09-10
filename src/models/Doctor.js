module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define(
    "Doctor",
    {
      nome: DataTypes.STRING,
      CRM: DataTypes.STRING,
      estado: DataTypes.STRING,
      cidade: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      tableName: "doctor",
    }
  );

  return Doctor;
};

/**
 *       CRM: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      estado: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cidade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
 */
