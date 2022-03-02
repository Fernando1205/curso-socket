'use strict';

const express = require('express');
const app = express();
const port = 3000;

const server = require('http').Server(app);

const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

// Middleware
app.use(express.static('client'));

var messages = [{
    id: 1,
    text: 'Bienvenido al chat privado de socket.io y nodejs',
    nickname: 'Bot - Fernando'
}];

app.get('/index', (req, res) => {
    res.status(200).send({
        message: 'Indice'
    })
});

io.on('connection', function(socket) {
    console.log(`El nodo Ip: ${socket.handshake.address} Se ha conectado`);

    socket.emit('messages', messages);

    socket.on('add-message', function(data) {
        messages.push(data);

        io.sockets.emit('messages', messages);
    })
});

server.listen(port, () => {
    console.log(`Listening port: ${port}`);
});