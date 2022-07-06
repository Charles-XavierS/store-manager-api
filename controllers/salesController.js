const salesService = require('../services/salesService');

const salesController = {
  async sales(req, res) {
    const { body } = req;
    const { code, message, newSales } = await salesService.sales(body);
    if (message) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(newSales);
  },

  async getAllSales(_req, res) {
    const { code, message, sales } = await salesService.getAllSales();
    if (message) return res.status(code).json({ message });
    res.status(code).json(sales);
  },

  async getSalesById(req, res) {
    const { id } = req.params;
    const { code, message, byId } = await salesService.getSalesById(id);
    if (message) return res.status(code).json({ message });
    res.status(code).json(byId);
  },
};

module.exports = salesController;
