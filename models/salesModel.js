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

  async getAllSales() {
    const query = `SELECT s.id AS saleId,
      s.date, sp.product_id
    AS productId, sp.quantity
    FROM StoreManager.sales AS s
    INNER JOIN StoreManager.sales_products AS sp
    ON s.id = sp.sale_id`;

  const [sales] = await StoreManager.query(query);

  return sales;
  },

  async getSalesById(id) {
    const query = `SELECT product_id AS productId,
        date, quantity
    FROM sales_products
    INNER JOIN sales
    ON sales.id = sales_products.sale_id
    WHERE sale_id = ?
    ORDER BY sale_id ASC, product_id ASC`;

  const [sales] = await StoreManager.query(query, [id]);
  return sales;
},

};

module.exports = modelSales;
