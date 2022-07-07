const StoreManager = require('./connection');

const modelProducts = {
  async getAllProducts() {
    const query = 'SELECT * FROM StoreManager.products;';

    const [products] = await StoreManager.query(query);

    return products;
  },

  async getProductsById(id) {
    const query = 'SELECT * FROM StoreManager.products WHERE id = ?';

    const [[product]] = await StoreManager.query(query, [id]);

    return product;
  },

  async addProduct(name) {
    const query = 'INSERT INTO StoreManager.products (name) VALUES (?);';

    const [{ insertId }] = await StoreManager.query(query, [name]);

    return { id: insertId, name };
  },

  async updateProduct({ id, name }) {
    const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';

    const [product] = await StoreManager.query(query, [name, id]);

    return product;
  },

};

module.exports = modelProducts;
