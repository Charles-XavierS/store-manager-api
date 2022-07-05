const express = require('express');

const routerProducts = require('./routes/productsRoutes');
const routerSales = require('./routes/salesRoutes');
const midError = require('./middlewares/midError');

const app = express();

app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', routerProducts);

app.use('/sales', routerSales);

app.use(midError);

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação
module.exports = app;
