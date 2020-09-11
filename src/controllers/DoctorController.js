/**
 *  @type {import("sequelize").Model}
 */
const {
  Doctor,
  DoctorMedicalSpecialty,
  MedicalSpecialty,
} = require("../models/index");

module.exports = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async store(req, res) {
    try {
      const { nome, CRM, estado, cidade } = req.body;
      const data = await Doctor.create({ nome, CRM, estado, cidade });
      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async index(req, res) {
    try {
      const { query } = req;
      const data = await Doctor.findAll({
        include: [
          {
            model: DoctorMedicalSpecialty,
            as: "doctor_medical_specialty",
            include: { model: MedicalSpecialty, as: "medical_specialty" },
          },
        ],
        where: { ...query },
      });
      res.json({ data });
    } catch (error) {
      console.log("index -> error", error);
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async show(req, res) {
    const { id } = req.params;
    const data = await Doctor.findByPk(id);
    res.json({ data });
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const data = await Doctor.destroy({ where: { id } });
      res.json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async update(req, res) {
    try {
      const { id } = req.params;
      const body = req;
      const data = await Doctor.update(body, { where: { id } });
      res.json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async addMedicalSpecialty(req, res) {
    try {
      const { id_medical_specialty, id_doctor } = req.body;
      console.log(
        "addMedicalSpecialty -> id_medical_specialty, id_doctor",
        id_medical_specialty,
        id_doctor,
      );

      const doctor = await Doctor.findByPk(id_doctor);
      const medicalSpecialty = await MedicalSpecialty.findByPk(
        id_medical_specialty,
      );

      let errors = [];

      if (!doctor) {
        errors.push("Medico não encontrado!");
      }
      if (!medicalSpecialty) {
        errors.push("Especialidade medica não encontrada!");
      }

      if (errors.length > 0) {
        throw new Error(errors);
      }

      await DoctorMedicalSpecialty.create({
        id_medical_specialty,
        id_doctor,
      });
      const data = { doctor, medicalSpecialty };
      res.json({ data });
    } catch (error) {
      console.log("addMedicalSpecialty -> error", error);
      res.status(500).json({ data: error.message });
    }
  },
};
