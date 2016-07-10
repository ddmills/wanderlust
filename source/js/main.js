'use strict';

let
  GameFactory = require('./Game/GameFactory'),
  EntityFactory = require('./entities/EntityFactory'),
  game = GameFactory.create()
;


let entities = new EntityFactory(0);

game.on('started', () => {
  let ground = entities.create('ground');

  for (let i = 0; i < 12; i++) {
    let ghost = entities.create('ghost');
    game.on('tick', ghost.update.bind(ghost));
  }

  for (let i = 0; i < 200; i++) {
    entities.create('tree');
  }
});

game.start();
