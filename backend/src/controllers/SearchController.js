const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {
    async index(request, response) {
        // Buscar todos os devs num raio de 10km
        // FIltrar por tecnologias

        console.log(request.query);

        const { latitude, longitude, techs } = request.query;
        const techsArray = parseStringAsArray(techs);

        const devs =  await Dev.find({
            techs: {
                $in: techsArray
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 200000
                }
            }
        });

        console.log(devs);

        return response.json({ devs });
    }
}