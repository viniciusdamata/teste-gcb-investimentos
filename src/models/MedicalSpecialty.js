module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define(
    "MedicalSpecialty",
    {},
    {
      freezeTableName: true,
      tableName: "medical-specialty",
    }
  );

  return Doctor;
};
