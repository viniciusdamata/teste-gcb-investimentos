module.exports = (sequelize, DataTypes) => {
  const MedicalSpecialty = sequelize.define(
    "MedicalSpecialty",
    {
      nome: DataTypes.STRING,
    },
    {
      freezeTableName: true,
      tableName: "medical_specialty",
    },
  );

  MedicalSpecialty.associate = function (models) {
    MedicalSpecialty.hasMany(models.DoctorMedicalSpecialty, {
      foreignKey: {
        name: "id_medical_specialty",
        fieldName: "id_medical_specialty",
      },
      as: "doctor_medical_specialty",
    });
  };

  return MedicalSpecialty;
};
