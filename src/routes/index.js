const { Router } = require("express");

const router = Router();
router.use(
  "/api",
  require("./doctorRoute.js"),
  require("./medicalSpecialtyRoute"),
);

module.exports = router;
