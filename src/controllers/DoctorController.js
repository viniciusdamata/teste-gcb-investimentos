const { Doctor } = require("../models/index");

module.exports = {
  store(req, res) {
    res.json("store");
  },
  index(req, res) {
    res.json("index");
  },
  show(req, res) {
    const { id } = req.params;
    res.json("show index" + id);
  },
  destroy(req, res) {
    const { id } = req.params;
    res.json("destroy index" + id);
  },
  update(req, res) {
    const { id } = req.params;
    res.json("update index" + id);
  },
};
