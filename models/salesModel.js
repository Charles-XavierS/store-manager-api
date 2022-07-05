const StoreManager = require('./connection');

const modelSales = {

  async create() {
    const [{ insertId }] = await StoreManager.query(`INSERT INTO StoreManager.sales (date)
        VALUES(NOW());`);
    return insertId;
  },

  async sales(saleId, productId, quantity) {
    const query = `INSERT INTO StoreManager.sales_products
        (sale_id, product_id, quantity) VALUES(?, ?, ?);`;
    await StoreManager.query(query, [saleId, productId, quantity]);
    return { productId, quantity };
  },

};

module.exports = modelSales;
