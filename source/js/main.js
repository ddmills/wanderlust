'use strict';

let game = require('./Game/GameFactory').create();

let entities = game.entities;
let client = game.client;

game.on('started', () => {
  console.log('started');
});

game.start();
