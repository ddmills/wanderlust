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

  socket.on('room.create', (data) => {
    socket.emit('room.created', data);
    console.log(`created room: ${data.name}`);
  });

  socket.on('room.join', (data) => {
    socket.emit('room.joined', data);
    console.log(`joined room: ${data.name}`);
  });
});
