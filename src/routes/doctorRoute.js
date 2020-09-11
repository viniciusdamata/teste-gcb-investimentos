const { Router } = require("express");
const doctor = Router();

const {
  index,
  store,
  show,
  update,
  destroy,
  addMedicalSpecialty,
} = require("../controllers/DoctorController");

doctor.route("/doctor/:id").get(show).put(update).delete(destroy);
doctor.route("/doctor").get(index).post(store);
doctor.route("/doctor/add-medical-specialty").post(addMedicalSpecialty);

module.exports = doctor;
