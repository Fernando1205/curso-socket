'use strict';

const express = require('express');
const app = express();
const port = 3000;

const server = require('http').Server(app);

const io = require('socket.io')(server);

// Middleware
app.use(express.static('client'));

app.get('/index', (req, res) => {
    res.status(200).send({
        message: 'Indice'
    })
});

io.on('connection', (socket) => {
    console.log(`El nodo Ip: ${socket.handshake.address} Se ha conectado`);
});

server.listen(port, () => {
    console.log(`Listening port: ${port}`);
});