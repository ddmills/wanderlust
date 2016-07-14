'use strict';

let
  Entity = require('./Entity'),
  Random = require('../utilities/Random'),
  Vector = require('../utilities/Vector'),
  MeshComponent = require('./components/MeshComponent'),
  LERPComponent = require('./components/LERPComponent'),
  TransformControllerComponent = require('./components/TransformControllerComponent')
;


module.exports = class Ghost extends Entity
{
  constructor(id, configuration)
  {
    super(id, configuration);

    this.visible = true;
    this.active = true;
  }

  static create(id, configuration)
  {
    let ghost = new Ghost(id, configuration);

    ghost
      .addComponent(new TransformControllerComponent())
      .addComponent(new LERPComponent())
      .addComponent(new MeshComponent({ meshAsset: 'box' }));

    return ghost;
  }
}
