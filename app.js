const path = require('path');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/retornaDespesas', (req, res) => {
  res.send([
    { id: 1, descricao: 'Despesa 1 (backend)', data: new Date(), valor: 12.8 },
    { id: 2, descricao: 'Despesa 2 (backend)', data: new Date(), valor: 10.0 },
    { id: 3, descricao: 'Despesa 3 (backend)', data: new Date(), valor: 12.8 },
    { id: 4, descricao: 'Despesa 4 (backend)', data: new Date(2020,03,12), valor: 10.0 }
  ]);
});

app.listen(port, () => {
  console.log('Server is up on port ' + port + '.');
});
