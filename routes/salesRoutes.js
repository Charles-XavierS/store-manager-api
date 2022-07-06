const express = require('express');

const salesController = require('../controllers/salesController');

const salesProducts = express.Router();

salesProducts.get('/', salesController.getAllSales);

salesProducts.get('/:id', salesController.getSalesById);

salesProducts.post('/', salesController.sales);

module.exports = salesProducts;
