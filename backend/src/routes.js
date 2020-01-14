// Importação de bibliotecas
const { Router } = require('express');
const axios = require('axios');
const dev = require('./models/dev');

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

// Cadastro de um dev
routes.post('/devs', async (request, response) => {
    const { github_username, techs, latitude, longitude } = request.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    // Usando a destruturação, caso a variável nome seja vazia o valor da mesma será preenchido pela variável login
    const { name = login, avatar_url, bio } = apiResponse.data;
    // Map percorre um array
    const techsArray = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
    }

    const newDev = await dev.create({
        github_username, 
        name, 
        avatar_url, 
        bio, 
        techs: techsArray, 
        location
    });

    // console.log(name, bio, avatar_url);

    return response.json(newDev);
});

module.exports = routes;