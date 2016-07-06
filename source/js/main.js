'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let GameObjectFactory = require('./object/GameObjectFactory');
let game = GameFactory.create();
let v = require('./utilities/Vector');
let Tree = require('./entities/Tree');
let MeshComponent = require('./entities/components/MeshComponent');

game.on('started', () => {
  let c = new GameObjectFactory(game.scene, game.assets);
  let g = c.create('ground');

  for (let i = 0; i < 200; i++) {
    let tree = new Tree(i);
    tree.addComponent(new MeshComponent('tree-1'));
    tree.addComponent(new MeshComponent('box'));

    tree.update();
  }

});

game.start();
