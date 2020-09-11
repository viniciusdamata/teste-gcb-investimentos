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
    },
  );

  Doctor.associate = function (models) {
    Doctor.hasMany(models.DoctorMedicalSpecialty, {
      foreignKey: {
        name: "id_doctor",
        fieldName: "id_doctor",
      },
      as: "doctor_medical_specialty",
    });
  };

  return Doctor;
};
