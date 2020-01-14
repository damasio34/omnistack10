// Importação de bibliotecas
const { Router } = require('express');
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchController');

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

// Lista de devs
routes.get('/devs', DevController.index);
// Cadastro de um dev
routes.post('/devs', DevController.store);
// Busca de devs
routes.get('/search', SearchController.index);

module.exports = routes;