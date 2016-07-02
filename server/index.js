'use strict';

let
  app = require('./file-server').start(),
  io  = require('socket.io')(app)
;

let clients = {};

io.on('connection', (socket) => {
  clients[socket.id] = socket;
  console.log(`[${socket.id}]`, `connected - ${Object.keys(clients).length} players`);

  socket.emit('hello', {
    id: socket.id,
    players: Object.keys(clients).length
  });

  socket.on('disconnect', () => {
    delete clients[socket.id];

    console.log(`[${socket.id}]`, `connected - ${Object.keys(clients).length} players`);
  });


  socket.on('yo', (data) => {
    console.log(`[${socket.id}]`, data);
  });
});
