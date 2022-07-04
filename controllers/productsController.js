const productsService = require('../services/productsService');

const productsController = {
  async getAllProducts(_req, res) {
    const { code, products } = await productsService.getAllProducts();
    return res.status(code).json(products);
  },

  async getProductsById(req, res) {
    const { id } = req.params;
    const { code, message, product } = await productsService.getProductsById(id);
    if (!product) {
      return res.status(code).json({ message });
    }
    return res.status(code).json(product);
  },

  async addProduct(req, res) {
    const { name } = req.body;
    const { code, message, product } = await productsService.addProduct(name);

    if (!product) return res.status(code).json({ message });

    return res.status(code).json(product);
  },

};

module.exports = productsController;
