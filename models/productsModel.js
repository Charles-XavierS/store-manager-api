const StoreManager = require('./connection');

const modelProducts = {
  async getAllProducts() {
    const [products] = await StoreManager.query(
      'SELECT * FROM StoreManager.products;',
    );
    return products;
  },

  async getProductsById(id) {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
    const [[product]] = await StoreManager.query(query, [id]);
    return product;
  },

  async addProduct(name) {
    const [{ insertId }] = await StoreManager.query(
      'INSERT INTO StoreManager.products (name) VALUES (?);', [name],
    );

    return { id: insertId, name };
  },

};

module.exports = modelProducts;
