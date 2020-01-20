const socketio = require('socket.io');
const parseStringAsArray = require('./Utils/parseStringAsArray');
const cauculateDistance = require('./Utils/calculateDistance')

let io;
let connections = [];

exports.setupWebsocket = (server) => {
    io = socketio(server);    
    io.on("connection", socket => {
        // console.log(socket.id);
        // console.log(socket.handshake.query);

        setTimeout(() => {
            io.to(socket.id).emit('message', 'Hello OmniStack')
        }, 5000);

        const { longitude, latitude, techs } = socket.handshake.query;

        connections.push({
            id: socket.id,
            coordinates: {
                latitude: Number(latitude),
                longitude: Number(longitude)
            },
            techs: parseStringAsArray(techs)
        });

        socket.on("disconnect", () => {
            console.log(connections.length);
            console.log(connections);
            connections = [...connections.filter(connection => {connection.id != socket.id})];

            console.log(connections.length);            
        });
    });
}

exports.findConnections = (coordinates, techs) => {
    return connections.filter(connection => {
        return cauculateDistance(coordinates, connection.coordinates) < 200
            && connection.techs.some(item => techs.includes(item))
    })
}

exports.sendMessage = (to, message, data) => {
    to.forEach(connection => {
        io.to(connection.id).emit(message, data);
    });
}