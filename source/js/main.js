'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let ComponentFactory = require('./component/ComponentFactory');
let Block = require('./components/Block');
let game = GameFactory.create();
let v = require('./utilities/Vector');

game.on('started', () => {
  let b = new Block(1);
  game.scene.add(b);

  let c = new ComponentFactory(game.scene, game.assets);

  for (let i = 0; i < 10; i++) {
    let tree = c.create('tree');
    tree.position = v(i * 3, 0, Math.random() * i);
  }

  b.position = v(2, 1, 5);
});

game.start();
