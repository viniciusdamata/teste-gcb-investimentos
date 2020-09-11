const { Router } = require("express");
const MedicalSpecialty = Router();

const {
  index,
  store,
  show,
  update,
  destroy,
} = require("../controllers/MedicalSpecialtyController");

MedicalSpecialty.route("/medical-specialty/:id")
  .get(show)
  .put(update)
  .delete(destroy);
MedicalSpecialty.route("/medical-specialty").get(index).post(store);

module.exports = MedicalSpecialty;
