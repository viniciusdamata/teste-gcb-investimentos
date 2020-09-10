/**
 *  @type {import("sequelize").Model}
 */
const { Doctor } = require("../models/index");

module.exports = {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async store(req, res) {
    const { nome, CRM, estado, cidade } = req.body;
    const data = await Doctor.create({ nome, CRM, estado, cidade });
    res.status(201).json({ data });
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async index(req, res) {
    const { query } = req;
    const data = await Doctor.findAll({ where: { ...query } });
    res.json({ data });
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
    const { id } = req.params;
    const data = await Doctor.destroy({ where: { id } });
    res.json({ data });
  },
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async update(req, res) {
    const { id } = req.params;
    const body = (req.body = req.body);
    const data = await Doctor.update(body, { where: { id } });
    res.json({ data });
  },
};
