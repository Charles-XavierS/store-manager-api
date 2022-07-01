const productsModel = require('../models/productsModel');

const productsService = {
  async getAllProducts() {
    const products = await productsModel.getAllProducts();

    return { code: 200, products };
  },

  async getProductsById(id) {
    const product = await productsModel.getProductsById(id);
    if (!product) {
      return { code: 404, message: 'Product not found' };
    }
    return { code: 200, product };
  },
};

module.exports = productsService;
