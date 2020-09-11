const { Router } = require("express");
const DoctorMedicalSpecialty = Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/DoctorMedicalSpecialtyController");

DoctorMedicalSpecialty.route("/doctor-medical-specialty/:id").get(show).put(update).delete(destroy);
DoctorMedicalSpecialty.route("/doctor-medical-specialty").get(index).post(store);

module.exports = DoctorMedicalSpecialty;
