const express = require('express');

const productsController = require('../controllers/productsController');

const routerProducts = express.Router();

routerProducts.get('/', productsController.getAllProducts);

routerProducts.get('/:id', productsController.getProductsById);

module.exports = routerProducts;
