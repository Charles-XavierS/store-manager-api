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
};

module.exports = salesService;
