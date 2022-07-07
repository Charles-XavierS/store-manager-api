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

  async addProduct(name) {
    if (!name) return { code: 400, message: '"name" is required' };

    if (name.length < 5) {
      return { code: 422, message: '"name" length must be at least 5 characters long' };
    }

    const product = await productsModel.addProduct(name);

    return { code: 201, product };
  },

  async updateProduct({ id, name }) {
    const product = await productsModel.getProductsById(id);

    if (!product) return { code: 404, message: 'Product not found' };

    if (!name) return { code: 400, message: '"name" is required' };

    if (name.length < 5) {
      return { code: 422, message: '"name" length must be at least 5 characters long' };
    }

    await productsModel.updateProduct({ id, name });

    return { code: 200, product: { id, name } };
  },

  async deleteProduct(id) {
    const product = await productsModel.getProductsById(id);

    if (!product) return { code: 404, message: 'Product not found' };

    await productsModel.deleteProduct(id);

    return { code: 204 };
  },

};

module.exports = productsService;
