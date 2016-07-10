'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  BoxCollisionComponent = require('./components/BoxCollisionComponent')
;


module.exports = class Tree extends Entity
{
  constructor(id)
  {
    super(id);

    let random = new Random(this.id);

    let scaling = 0.75 + random.float * 2;

    this.position = new Vector(random.int(-50, 50), 0, random.int(-50, 50));
    this.rotation = new Vector(random.float * 0.15, random.float * (Math.PI * 2), random.float * 0.15);
    this.scaling = new Vector(scaling, scaling, scaling);

    this.visible = true;
  }

  static create(id)
  {
    let tree = new Tree(id);

    tree
      .addComponent(new MeshComponent({ meshAsset: 'tree-1' }))
      .addComponent(new BoxCollisionComponent({
        scaling: new Vector(.2, 4, .2),
        offset: new Vector(0, .4, 0)
      }));

    return tree;
  }
}
