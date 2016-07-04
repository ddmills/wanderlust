'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let GameObjectFactory = require('./object/GameObjectFactory');
let game = GameFactory.create();
let v = require('./utilities/Vector');

game.on('started', () => {
  let c = new GameObjectFactory(game.scene, game.assets);

  for (let i = 0; i < 200; i++) {
    let tree = c.create('tree');

    let x = Math.random() * 100 - 50;
    let z = Math.random() * 100 - 50;

    tree.position = v(x, 0, z);

    tree.rotation.y = Math.random() * i;
    tree.rotation.x = Math.random() * 0.15;
    tree.rotation.z = Math.random() * 0.15;

    let scaling = 0.75 + Math.random() * 2;

    tree.scaling.y = scaling;
    tree.scaling.x = scaling;
    tree.scaling.z = scaling;
  }

});

game.start();
