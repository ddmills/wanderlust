'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let GameObjectFactory = require('./object/GameObjectFactory');
let game = GameFactory.create();
let v = require('./utilities/Vector');

game.on('started', () => {
  let c = new GameObjectFactory(game.scene, game.assets);

  for (let i = 0; i < 10; i++) {
    let tree = c.create('tree');
    tree.position = v(i * 3, 0, Math.random() * i);
  }

});

game.start();
