const productsModel = require('../models/productsModel');

const validSales = async (productId, quantity) => {
  if (!productId) {
    return { code: 400, message: '"productId" is required' };
  }
  if (quantity <= 0) {
    return {
      code: 422, message: '"quantity" must be greater than or equal to 1',
    };
  }

  if (!quantity) {
    return { code: 400, message: '"quantity" is required' };
  }

  const product = await productsModel.getProductsById(productId);
  if (!product) {
    return { code: 404, message: 'Product not found' };
  }
};
module.exports = validSales;
