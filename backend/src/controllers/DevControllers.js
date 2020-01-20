// Importação de bibliotecas
const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');
const { findConnections, sendMessage } = require('../websocket');

// Funções do controller: index, show, store, update, destroy

module.exports = {
    async index (request, response) {
        const devs = await Dev.find();

        return response.json(devs);
    },

    async store (request, response) {
        const { github_username, techs, latitude, longitude } = request.body;

        let dev = await Dev.findOne({ github_username });

        if (!dev) {

            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            // Usando a destruturação, caso a variável nome seja vazia o valor da mesma será preenchido pela variável login
            const { name = login, avatar_url, bio } = apiResponse.data;
            // Map percorre um array
            const techsArray = parseStringAsArray(techs);
        
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            }
        
            dev = await Dev.create({
                github_username, 
                name, 
                avatar_url, 
                bio, 
                techs: techsArray, 
                location
            });

            // Filter as conexões que estão no máximo a 200km de distância
            // e que o novo deve tenha pelo menos uma das tecnologias filtradas
            const sendSocketMessageTo = findConnections(
                { latitude, longitude }, 
                techsArray
            );

            sendMessage(sendSocketMessageTo, 'new-dev', dev);

        }
            
        return response.json(dev);
    },

    async update() {
        // nome, avatar, bio, localicação, techs
    },

    async destroy() {

    }

};