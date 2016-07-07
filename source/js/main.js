'use strict';

let roomname = 'wander';

let GameFactory = require('./Game/GameFactory');
let GameObjectFactory = require('./object/GameObjectFactory');
let game = GameFactory.create();
let Vector = require('./utilities/Vector');
let Tree = require('./entities/Tree');
let MeshComponent = require('./entities/components/MeshComponent');
let BoxCollisionComponent = require('./entities/components/BoxCollisionComponent');

game.on('started', () => {
  let c = new GameObjectFactory(game.scene, game.assets);
  let g = c.create('ground');

  for (let i = 0; i < 200; i++) {
    let tree = new Tree(i);

    tree.addComponent(new MeshComponent('tree-1'));
    tree.addComponent(new BoxCollisionComponent({
      scaling: new Vector(.2, 4, .2),
      offset: new Vector(0, .4, 0)
    }));

    tree.update();
  }

});

game.start();
