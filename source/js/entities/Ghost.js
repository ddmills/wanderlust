'use strict';

let
  Entity = require('./Entity'),
  MeshComponent = require('./components/MeshComponent'),
  LERPComponent = require('./components/LERPComponent'),
  TransformControllerComponent = require('./components/TransformControllerComponent')
;


module.exports = class Ghost extends Entity
{
  static create(id, configuration)
  {
    let ghost = new Ghost(id);

    ghost
      .addComponent(new TransformControllerComponent())
      .addComponent(new LERPComponent())
      .addComponent(new MeshComponent({
        meshAsset: 'box'
      }))
      .applyConfiguration(configuration);

    return ghost;
  }
}
