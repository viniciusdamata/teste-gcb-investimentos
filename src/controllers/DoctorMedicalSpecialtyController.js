/**
 *  @type {import("sequelize").Model}
 */
const { DoctorMedicalSpecialty } = require("../models/index");

module.exports = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async store(req, res) {
    try {
      const { doctor, medical_specialty } = req.body;
      console.log("store -> doctor, medical_specialty", doctor, medical_specialty)
      const data = await DoctorMedicalSpecialty.create({
        id_doctor: doctor.id,
        id_medical_specialty: medical_specialty.id,
      });
      res.status(201).json({ data });
    } catch (error) {
      res.status(500).json({ data: error.message });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async index(req, res) {
    try {
      const { query } = req;
      const data = await DoctorMedicalSpecialty.findAll({
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
    const data = await DoctorMedicalSpecialty.findOne({
      where: { id },
    });
    res.json({ data });
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const data = await DoctorMedicalSpecialty.destroy({ where: { id } });
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
      const { body } = req;
      const data = await DoctorMedicalSpecialty.update(body, { where: { id } });
      res.json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
};
