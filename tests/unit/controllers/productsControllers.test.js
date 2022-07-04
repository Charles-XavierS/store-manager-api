const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const { describe, it } = require('mocha');

const productsService = require('../../../services/productsService');
const productsController = require('../../../controllers/productsController');

const allProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

chai.use(chaiAsPromised);

describe('controllers/productsController', () => {
  const res = {};
  const req = {};

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
})
