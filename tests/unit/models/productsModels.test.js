const sinon = require('sinon');
const { expect } = require('chai');
const { describe, it } = require('mocha');

const storeManager = require('../../../models/connection');
const productsModel = require('../../../models/productsModel');

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

describe('models/productsModel', () => {
  describe('productsModel.getAllProducts', () => {
    beforeEach(() => sinon.stub(storeManager, 'query').resolves([allProducts]));
    afterEach(() => sinon.restore());

    it('Verifica se retorna um array com todos os produtos', async () => {
      const products = await productsModel.getAllProducts();
      expect(products).to.be.an('array');
      expect(products).to.deep.equal(allProducts);
    });
  });
});


