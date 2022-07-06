const salesModel = require('../models/salesModel');
const saleIsValid = require('../middlewares/saleIsValid');

const salesService = {
  async sales(list) {
    const product = await Promise.all(
      list.map(async (sale) => saleIsValid(sale.productId, sale.quantity)),
    );

    if (product.some((message) => message)) {
      return product.find((message) => message);
    }

    const saleId = await salesModel.create();
    await Promise.all(
      list.map((sale) =>
        salesModel.sales(saleId, sale.productId, sale.quantity)),
    );
    const newSales = {
      id: saleId,
      itemsSold: list,
    };
    return { code: 201, newSales };
  },

  async getAllSales() {
    const sales = await salesModel.getAllSales();
    const code = 200;
    return { code, sales };
  },

  async getSalesById(id) {
    const byId = await salesModel.getSalesById(id);

    if (byId.length === 0) {
      return { code: 404, message: 'Sale not found' };
    }
    return { code: 200, byId };
  },
};

module.exports = salesService;
