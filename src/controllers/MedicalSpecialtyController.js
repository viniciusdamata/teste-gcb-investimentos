/**
 *  @type {import("sequelize").Model}
 */
const { MedicalSpecialty } = require("../models/index");

module.exports = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async store(req, res) {
    try {
      const { nome } = req.body;
      const data = await MedicalSpecialty.create({ nome });
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
      const data = await MedicalSpecialty.findAll({ where: { ...query } });
      res.json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async show(req, res) {
    const { id } = req.params;
    const data = await MedicalSpecialty.findByPk(id);
    res.json({ data });
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async destroy(req, res) {
    try {
      const { id } = req.params;
      const data = await MedicalSpecialty.destroy({ where: { id } });
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
      const data = await MedicalSpecialty.update(body, { where: { id } });
      res.json({ data });
    } catch (error) {
      res.status(500).json({ data: error });
    }
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
};
