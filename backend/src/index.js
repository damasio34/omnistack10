// Importação de bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// Declaração de constantes
const app = express();

// Conexão com o mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-30lsp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// `use` significa que será válido ara todas as rotas da aplicação

// Habilitando acesso de outros clientes à API.
app.use(cors({ origin: 'http://localhost:3000' }));
// Habilitando o formato json
app.use(express.json());
// Importando as rotas do arquivo routes.js
app.use(routes);
// Porta ao qual o servidor da API será disponibilizado
app.listen(3333);