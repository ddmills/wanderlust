'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let GameObjectFactory = require('./object/GameObjectFactory');
let game = GameFactory.create();
let v = require('./utilities/Vector');

game.on('started', () => {
  let c = new GameObjectFactory(game.scene, game.assets);
  let g = c.create('ground');

  for (let i = 0; i < 200; i++) {
    let tree = c.create('tree');
  }

});

game.start();
