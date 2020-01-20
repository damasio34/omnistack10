// Importação de bibliotecas
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

// Conexão com o mongoDB
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-30lsp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
// `use` significa que será válido ara todas as rotas da aplicação

// Habilitando acesso de outros clientes à API.
//app.use(cors({ origin: 'http://localhost:3000' }));
// Todos
app.use(cors({ }));
// Habilitando o formato json
app.use(express.json());
// Importando as rotas do arquivo routes.js
app.use(routes);
// Porta ao qual o servidor da API será disponibilizado
server.listen(3333);