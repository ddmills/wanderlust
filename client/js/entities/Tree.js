'use strict';

let
  Entity = require('./Entity'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  BoxCollisionComponent = require('./components/BoxCollisionComponent'),
  TransformControllerComponent = require('./components/TransformControllerComponent')
;


module.exports = class Tree extends Entity
{
  static create(id, configuration)
  {
    let tree = new Tree(id);

    tree
      .addComponent(new MeshComponent({
        meshAsset: 'tree-1'
      }))
      .addComponent(new TransformControllerComponent())
      .addComponent(new BoxCollisionComponent({
        scaling: new Vector(.2, 4, .2),
        offset: new Vector(0, .4, 0)
      }))
      .applyConfiguration(configuration);

    return tree;
  }
}
