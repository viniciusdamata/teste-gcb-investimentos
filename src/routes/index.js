const { Router } = require("express");

const router = Router();
router.use(
  "/api",
  require("./doctorRoute"),
  require("./medicalSpecialtyRoute"),
  require("./doctorMedicalSpecialtyRoute")
);

module.exports = router;
