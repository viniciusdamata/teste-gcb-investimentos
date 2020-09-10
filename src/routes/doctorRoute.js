const { Router } = require("express");
const doctor = Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/DoctorController");

doctor.route("/doctor/:id").get(show).put(update).delete(destroy);
doctor.route("/doctor").get(index).post(store);

module.exports = doctor;
