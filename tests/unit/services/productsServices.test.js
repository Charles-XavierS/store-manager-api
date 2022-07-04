const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { describe, it } = require('mocha');

const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');
const mocks = require('../../../mocks/mocks');

chai.use(chaiAsPromised);

describe('services/productsService', () => {

  beforeEach(sinon.restore);

  describe('productsService.getAllProducts', () => {

    it('Verifica se retorna todos os produtos', async () => {

      const allProducts = mocks.allProducts;

      sinon.stub(productsModel, 'getAllProducts').resolves(allProducts);
      const { products } = await productsService.getAllProducts();
      chai.expect(products).to.equal(allProducts);
    });
  });

  describe('productsService.getProductsById', () => {

    it('Verifica se retorna o produto, caso o id seja encontrado', () => {

      const byId = mocks.byId;

      sinon.stub(productsModel, 'getProductsById').resolves(byId);
      chai.expect(productsService.getProductsById(1)).to.eventually.deep.equal(byId);
    });
  });

});
