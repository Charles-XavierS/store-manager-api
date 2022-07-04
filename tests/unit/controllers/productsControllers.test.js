const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const { describe, it } = require('mocha');

const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');
const mocks = require('../../../mocks/mocks');

chai.use(chaiAsPromised);

describe('controllers/productsController', () => {

  const res = {};
  const req = {};
  const allProducts = mocks.allProducts;

  beforeEach(sinon.restore);

  describe('productsController.getAllProducts', () => {

    it('Verifica se ao retornar todos os produtos, o status é "200"', async () => {
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, "getAllProducts")
        .resolves({ code: 200, item: allProducts });
      await productsController.getAllProducts(req, res);
      chai.expect(res.status.calledWith(200)).to.be.equal(true);
    });
  });

  describe('productsController.getProductsById', () => {

    it('Verifica se retorna status "404" caso o id não seja encontrado', async () => {

      req.params = { id: 4 };
      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productsService, 'getProductsById').resolves({ code: 404, message: 'Product not found' });
      await productsController.getProductsById(req, res);
      chai.expect(res.status.calledWith(404)).to.be.equal(true);
    });
  });

})
