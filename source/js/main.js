'use strict';

let game = require('./Game/GameFactory').create();

let entities = game.entities;

game.on('started', () => {
  entities.create('ground');

  for (let i = 0; i < 12; i++) {
    entities.create('ghost');
  }

  for (let i = 0; i < 200; i++) {
    entities.create('tree');
  }
});

game.start();
