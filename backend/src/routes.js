// Importação de bibliotecas
const { Router } = require('express');

// Declaração de constantes
const routes = Router();

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
// URL root
routes.get('/', (request, response) => {
    return response.json({ message: 'Hello Omnstack' });
});

// Cadastro de usuário
routes.post('/users', (request, response) => {
    console.log(request.body);
    return response.json({ message: `Usuário ${request.body.nome} cadastrado com sucesso.` });
});

module.exports = routes;