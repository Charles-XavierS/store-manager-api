const sinon = require('sinon');
const chai = require('chai');
const { describe, it } = require('mocha');

const storeManager = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');
const StoreManager = require('../../../models/connection');
const mocks = require('../../../mocks/mocks');

describe('models/productsModel', () => {

  describe('productsModel.getAllProducts', () => {

    const allProducts = mocks.allProducts;

    beforeEach(() => sinon.stub(storeManager, 'query').resolves([allProducts]));
    afterEach(() => sinon.restore());

    it('Verifica se retorna um array com todos os produtos', async () => {
      const products = await productsModel.getAllProducts();
      chai.expect(products).to.be.an('array');
      chai.expect(products).to.deep.equal(allProducts);
    });
  });

  describe('productsModel.getProductsById', () => {

    it('Verifica se retorna algum produto com base no id', () => {

      const byId = mocks.byId;

      sinon.stub(StoreManager, 'query').resolves(byId);
      chai.expect(productsModel.getProductsById(1))
    });
  });

});


