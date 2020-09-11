module.exports = (sequelize, DataTypes) => {
  const DoctorMedicalSpecialty = sequelize.define(
    "DoctorMedicalSpecialty",
    {
      id_doctor: DataTypes.INTEGER,
      id_medical_specialty: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      tableName: "doctor_medical_specialty",
    },
  );

  DoctorMedicalSpecialty.associate = function (models) {
    DoctorMedicalSpecialty.belongsTo(models.Doctor, {
      foreignKey: {
        name: "id_doctor",
        fieldName: "id_doctor",
      },
      as: "doctor",
    });

    DoctorMedicalSpecialty.belongsTo(models.MedicalSpecialty, {
      foreignKey: {
        name: "id_medical_specialty",
        fieldName: "id_medical_specialty",
      },
      as: "medical_specialty",
    });
  };

  return DoctorMedicalSpecialty;
};
