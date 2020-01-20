import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.106:3333', {
    autoConnect: false
});

function subscribToNewDevs(subscribeFunction) {
    socket.on('new-dev', subscribeFunction);
}

async function connect(latitude, longitude, techs) {
    disconnect();
    
    socket.io.opts.query = {
        latitude,
        longitude, 
        techs
    };

    socket.connect();

    socket.on('message', text => {
        console.log(text);
    })
}

function disconnect() {
    if (socket.connected) {
        socket.disconnect();
    }
}

export { connect, disconnect, subscribToNewDevs };