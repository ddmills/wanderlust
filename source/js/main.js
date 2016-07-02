'use strict';

let GameFactory = require('./Game/GameFactory');
let game = GameFactory.create();

game.client.on('connect', () => {
  console.log('server says hello');
});

game.on('loaded', () => {
  console.log('game loaded');
});

game.on('started', () => {
  console.log('game started');
});

game.start();
