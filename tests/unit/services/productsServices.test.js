const sinon = require('sinon');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { describe, it } = require('mocha');

const productsModel = require('../../../models/productsModel');
const productsService = require('../../../services/productsService');

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

describe('services/productsService', () => {
  beforeEach(sinon.restore);
  describe('productsService.getAllProducts', () => {
    it('Verifica se retorna todos os produtos', async () => {
      sinon.stub(productsModel, 'getAllProducts').resolves(allProducts);
      const { products } = await productsService.getAllProducts();
      chai.expect(products).to.equal(allProducts);
    });
  });

});
