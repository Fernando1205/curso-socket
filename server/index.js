'use strict';

const express = require('express');
const app = express();
const port = 3000;

const server = require('http').Server(app);

const io = require('socket.io')(server);

app.get('/index', (req, res) => {
    res.status(200).send({
        message: 'Indice'
    })
});

server.listen(port, () => {
    console.log(`Listening port: ${port}`);
});