const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRouter');

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use('/usuario', usuarioRoutes);

app.listen(8000, () => {
  console.log(`Servidor rodando na porta 8000`);
});