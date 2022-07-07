const express = require('express');

const productsController = require('../controllers/productsController');

const routerProducts = express.Router();

routerProducts.get('/', productsController.getAllProducts);

routerProducts.post('/', productsController.addProduct);

routerProducts.get('/:id', productsController.getProductsById);

routerProducts.put('/:id', productsController.updateProduct);

routerProducts.delete('/:id', productsController.deleteProduct);

module.exports = routerProducts;
