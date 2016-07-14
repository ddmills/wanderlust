'use strict';

let game = require('./Game/GameFactory').create();

game.on('started', () => {
  console.log('started');
});

game.start();
