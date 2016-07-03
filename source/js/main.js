'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let game = GameFactory.create();

game.client.on('recieve', (msg) => {
  console.log(`[server] ${msg}`);
});

game.start();
