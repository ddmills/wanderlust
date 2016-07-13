'use strict';

require('dotenv').config();

let
  app = require('./file-server').start(),
  io = require('socket.io')(app),
  World = require('./World'),
  EntityFactory = require('./entities/EntityFactory')
;

let clients = {};
let worlds = {};
let entityFactory = new EntityFactory();

function loop() {

}

function synchronize() {
  for (let world in worlds) {
    io.to(world).emit('world.synchronize', worlds[world].state);
  }
}

function loop() {
  for (let world in worlds) {
    worlds[world].loop();
  }
}

setInterval(synchronize, process.env.SYNC_RATE);
setInterval(loop, process.env.LOOP_RATE);

io.on('connection', (socket) => {
  clients[socket.id] = socket;
  console.log(`[${socket.id}]`, `connected - ${Object.keys(clients).length} players`);

  socket.on('disconnect', () => {
    delete clients[socket.id];

    let world = worlds[socket.world];
    if (world) world.leave(socket);

    console.log(`[${socket.id}]`, `disconnected - ${Object.keys(clients).length} players`);
  });

  socket.on('world.create', (data) => {
    let name = data.name;

    if (worlds[name]) {
      console.log(`[${socket.id}]`, `error - World '${name}' already exists`);
      socket.emit('world.error', { 'message' : `World '${name}' already exists` });
      return;
    }

    let world = new World(name, entityFactory);
    worlds[name] = world;
    console.log(`[${socket.id}]`, `world created - ${name}`);

    socket.emit('world.created', data);
  });

  socket.on('world.join', (data) => {
    let name = data.name;
    let client = clients[socket.id];
    let world = worlds[name];

    if (!world) {
      world = new World(name, entityFactory);
      worlds[name] = world;
      console.log(`[${socket.id}]`, `world created - '${name}'`);
    }

    console.log(`[${socket.id}]`, `joined world - ${name}`);
    world.join(client, socket);
  });

  socket.on('world.leave', (data) => {
    let world = worlds[socket.world];
    let client = clients[socket.id];

    if (world) world.leave(client, socket);
  });
});
