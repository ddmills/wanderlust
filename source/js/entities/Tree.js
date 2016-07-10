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

    this.position.x = random.int(-50, 50);
    this.position.y = 0;
    this.position.z = random.int(-50, 50);

    this.rotation.y = random.float * (Math.PI * 2);
    this.rotation.x = random.float * 0.15;
    this.rotation.z = random.float * 0.15;

    let scaling = 0.75 + random.float * 2;

    this.scaling.y = scaling;
    this.scaling.x = scaling;
    this.scaling.z = scaling;

    this.visible = true;
  }

  static create(id)
  {
    let tree = new Tree(id);

    tree
      .addComponent(new MeshComponent({
        meshAsset: 'tree-1'
      }))
      .addComponent(new BoxCollisionComponent({
        scaling: new Vector(.2, 4, .2),
        offset: new Vector(0, .4, 0)
      }));

    return tree;
  }
}
