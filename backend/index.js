// Importação de bibliotecas
const express = require('express');
const mongoose = require('mongoose');

// Instanciando o express
const app = express();

// Conexão com o mongoDB
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-30lsp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// `use` significa que será válido ara todas as rotas da aplicação
// Habilitando o formato json
app.use(express.json());

/**
 * 
 * Métodos HTTP: GET, POST, PUT, DELETE
 * 
 * Tipos de parâmetros:
 * 
 * Query Params: request.query (filtros, ordenação, paginação, ...)
 * Route Params: request.params (identificar um recurso na alteração ou remoção)
 * Body: request.body (dados para criação ou alteração de um registro)
 * 
 */

 // MongoDB não relaciona

// URL root
app.get('/', (request, response) => {
    return response.json({ message: 'Hello Omnstack' });
});

// Cadastro de usuário
app.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: `Usuário ${request.body.nome} cadastrado com sucesso.` });
});

// Porta ao qual o servidor da API será disponibilizado
app.listen(3333);