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
};

module.exports = salesController;
