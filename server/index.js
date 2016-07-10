'use strict';

require('dotenv').config();

let
  app  = require('./file-server').start(),
  io   = require('socket.io')(app),
  Room = require('./Room')
;

let clients = {};
let rooms = {};

io.on('connection', (socket) => {
  clients[socket.id] = socket;
  console.log(`[${socket.id}]`, `connected - ${Object.keys(clients).length} players`);

  socket.on('disconnect', () => {
    delete clients[socket.id];

    let room = rooms[socket.room];
    if (room) room.leave(socket);

    console.log(`[${socket.id}]`, `disconnected - ${Object.keys(clients).length} players`);
  });

  socket.on('room.create', (data) => {
    let name = data.name;

    if (rooms[name]) {
      console.log(`[${socket.id}]`, `error - Room '${name}' already exists`);
      socket.emit('room.error', { 'message' : `Room '${name}' already exists` });
      return;
    }

    let room = new Room(name);
    rooms[name] = room;
    console.log(`[${socket.id}]`, `room created - '${name}'`);

    socket.emit('room.created', data);
  });

  socket.on('room.join', (data) => {
    let name = data.name;
    let client = clients[socket.id];
    let room = rooms[name];

    if (!room) {
      room = new Room(name);
      rooms[name] = room;
      console.log(`[${socket.id}]`, `room created - '${name}'`);
    }

    console.log(`[${socket.id}]`, `joined room - ${name}`);
    room.join(client, socket);
  });

  socket.on('room.leave', (data) => {
    let room = rooms[socket.room];
    let client = clients[socket.id];

    if (room) room.leave(client, socket);
  });
});
