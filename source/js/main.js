'use strict';

let game = require('./Game/GameFactory').create();

let entities = game.entities;
let client = game.client;

game.on('started', () => {
  entities.create('ground');

  for (let i = 0; i < 12; i++) {
    entities.create('ghost');
  }

  for (let i = 0; i < 200; i++) {
    entities.create('tree');
  }

  client.on('entity:spawn', (type, options) => {
    console.log('spawn', type);
  });

});

game.start();
